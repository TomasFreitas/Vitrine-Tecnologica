function openTab(evt, tabId) {
    // Esconde todos os conteúdos de abas
    const allContents = document.querySelectorAll(".tab-content, .admin-tab-content");
    allContents.forEach(content => {
        content.classList.remove("active");
    });

    // Desativa todos os botões de abas
    const allButtons = document.querySelectorAll(".tab-link, .admin-tab-button");
    allButtons.forEach(button => {
        button.classList.remove("active");
    });

    // Mostra o conteúdo da aba selecionada
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.add("active");
    }

    // Ativa o botão que foi clicado
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}

// ============== LÓGICA DOS MODAIS ==============

// Funções para abrir os modais
function openEditModal(type, id, title, description, authors, category, area) {
    const editModal = document.getElementById('editModal');
    const editModalTitle = document.getElementById('editModalTitle');
    const editForm = document.getElementById('editForm');
    
    // Configura o título e o tipo do modal
    editModalTitle.textContent = `Editar ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    editForm.querySelector('#editId').value = id;
    editForm.querySelector('#editType').value = type;

    // Preenche o formulário com os dados
    if (type === 'projeto') {
        document.getElementById('editTitle').value = title || '';
        document.getElementById('editDesc').value = description || '';
        document.getElementById('editAutores').value = authors || '';

        // Mostra os campos de descrição e autores
        document.querySelector('.admin-form-group label[for="editDesc"]').parentElement.style.display = 'block';
        document.querySelector('.admin-form-group label[for="editAutores"]').parentElement.style.display = 'block';
        
        // Ativa os campos de categoria e área do conhecimento (opcional, mas recomendado)
        document.querySelector('.admin-form-group label[for="editCategory"]').parentElement.style.display = 'block';
        document.querySelector('.admin-form-group label[for="editArea"]').parentElement.style.display = 'block';
        
        // Seleciona a categoria e a área do conhecimento
        const editCategorySelect = document.getElementById('editCategory');
        editCategorySelect.value = category;
        const editAreaSelect = document.getElementById('editArea');
        if (editAreaSelect) {
            editAreaSelect.value = area;
        }

    } else if (type === 'categoria') {
        document.getElementById('editTitle').value = title || '';
        
        // Esconde os campos de descrição e autores para categorias
        document.querySelector('.admin-form-group label[for="editDesc"]').parentElement.style.display = 'none';
        document.querySelector('.admin-form-group label[for="editAutores"]').parentElement.style.display = 'none';
        
        // Esconde os campos de categoria e área do conhecimento
        document.querySelector('.admin-form-group label[for="editCategory"]').parentElement.style.display = 'none';
        document.querySelector('.admin-form-group label[for="editArea"]').parentElement.style.display = 'none';
    }

    editModal.style.display = 'block';
}

function openDeleteModal(type, id, title) {
    const deleteModal = document.getElementById('deleteModal');
    const deleteMessage = document.getElementById('deleteMessage');
    const confirmDeleteBtn = document.getElementById('confirmDelete');
    
    // Altera a mensagem de confirmação
    deleteMessage.innerHTML = `Tem certeza que deseja excluir o <strong>${type}</strong>: <strong>${title}</strong>? Esta ação não pode ser desfeita.`;
    
    // Define o que o botão de confirmar deve fazer (esta parte precisará de back-end real)
    confirmDeleteBtn.onclick = function() {
        // Lógica de exclusão aqui, por exemplo:
        // deleteItem(type, id);
        alert(`Simulação: Item ${id} do tipo ${type} foi excluído!`);
        closeModal(deleteModal);
    };

    deleteModal.style.display = 'block';
}


// Funções para fechar os modais
function closeModal(modal) {
    modal.style.display = 'none';
}

// Adiciona eventos de clique para fechar os modais
document.addEventListener('DOMContentLoaded', () => {
    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');
    const closeButtons = document.querySelectorAll('.close-button');
    const cancelDeleteBtn = document.getElementById('cancelDelete');

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(editModal);
            closeModal(deleteModal);
        });
    });

    cancelDeleteBtn.addEventListener('click', () => {
        closeModal(deleteModal);
    });

    // Fecha o modal se o usuário clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === editModal) {
            closeModal(editModal);
        }
        if (event.target === deleteModal) {
            closeModal(deleteModal);
        }
    });

    // Lógica para salvar a edição (precisará de back-end)
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('editId').value;
        const type = document.getElementById('editType').value;
        const newTitle = document.getElementById('editTitle').value;
        const newDesc = document.getElementById('editDesc').value;
        const newAutores = document.getElementById('editAutores').value;
        
        const editCategorySelect = document.getElementById('editCategory');
        const newCategory = editCategorySelect ? editCategorySelect.value : '';
        const editAreaSelect = document.getElementById('editArea');
        const newArea = editAreaSelect ? editAreaSelect.value : '';

        // Lógica de salvamento aqui, por exemplo:
        // saveChanges(type, id, newTitle, newDesc, newAutores, newCategory, newArea);
        alert(`Simulação: Item ${id} do tipo ${type} foi atualizado para o título "${newTitle}" e categoria "${newCategory}"!`);
        closeModal(editModal);
    });
});






// NOVOOO


function toggleForm() {
    const formContainer = document.getElementById('formulario-vitrine');
    formContainer.classList.toggle('hidden');
}

function showSection(sectionId) {
    const allSections = document.querySelectorAll('.admin-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    const sidebarButtons = document.querySelectorAll('.admin-sidebar-button');
    sidebarButtons.forEach(button => {
        button.classList.remove('active');
    });
    const clickedButton = document.querySelector(`.admin-sidebar-button[onclick*="${sectionId}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}