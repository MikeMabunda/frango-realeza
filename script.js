// ============================================
// BASE DE DADOS DE PRODUTOS
// ============================================

const produtos = [
    {
        id: 1,
        nome: "Frango Vivo",
        categoria: "frango-vivo",
        descricao: "Frango fresco vivo, saudável 1 unidade de 2,5kg",
        preco: 300.00,
        promocao: 290.00,
        rating: 5,
        emoji: "🐔"
    },
    {
        id: 2,
        nome: "Frango Congelado",
        categoria: "frango-congelado",
        descricao: "frango fresco congelado, pronto para cozinhar 1 unidade de 2,5kg",
        preco: 320.00,
        promocao: 300.00,
        rating: 5,
        emoji: "🍗"
    },
    {
        id: 3,
        nome: "Caixa de Frango",
        categoria: "caixa",
        descricao: "Caixa de frango congelado, contém 10 unidades de 2,5kg cada",
        preco: 3100.00,
        promocao: 3000.00,
        rating: 4.5,
        emoji: "📦"
    },
    {
        id: 4,
        nome: "Asas de Frango",
        categoria: "peito",
        descricao: "Asas frescas, perfeitas para espetadas 1kg",
        preco: 250.00,
        promocao: 230.00,
        rating: 4.5,
        emoji: "🍗"
    },
    {
        id: 5,
        nome: "Peito de Frango",
        categoria: "peito",
        descricao: "Peito de frango sem osso e sem pele, 1kg",
        preco: 330.00,
        promocao: 300.00,
        rating: 5,
        emoji: "🥩"
    },
    {
        id: 6,
        nome: "Caixa de Asas de Frango",
        categoria: "Peito",
        descricao: "Caixa de asas de frango congeladas, 10kg",
        preco: 2400.00,
        promocao: 2300.00,
        rating: 4,
        emoji: "📦"
    },
    {
        id: 7,
        nome: "Caixa de Peito de Frango",
        categoria: "Peito",
        descricao: "Caixa de peito de frango congelado, 10kg",
        preco: 3100.00,
        promocao: 2900.00,
        rating: 4.5,
        emoji: "📦"
    },
    {
        id: 8,
        nome: "Frango Vivo",
        categoria: "frango-vivo",
        descricao: "Frango vivo extra, saudável e saboroso 3 unidades",
        preco: 885.00,
        promocao: 870.00,
        rating: 4,
        emoji: "🐔"
    },
    {
        id: 9,
        nome: "Frango Vivo",
        categoria: "frango-vivo",
        descricao: "Frango vivo extra, saudável e saboroso 15 unidades",
        preco: 4425.00,
        promocao: 4275.00,
        rating: 5,
        emoji: "🐔"
    },
    {
        id: 10,
        nome: "Frango Congelado",
        categoria: "frango-congelado",
        descricao: "Frango congelado, fresco e pronto para cozinhar, 3 unidades",
        preco: 960.00,
        promocao: 945.00,
        rating: 5,
        emoji: "🍗"
    },
    {
        id: 11,
        nome: "Rabinho de Frango",
        categoria: "rabinho",
        descricao: "Rabinho de Frango, pronto para espetar 10kg",
        preco: 1100.00,
        promocao: 1000.00,
        rating: 4,
        emoji: "🍗"
    },
    {
        id: 12,
        nome: "Pedaços",
        categoria: "frango-inteiro",
        descricao: "Frango inteiro dividido em pedaços, pronto para cozinhar",
        preco: 390.00,
        promocao: 370.00,
        rating: 4.5,
        emoji: "🍗"
    }
];

// ============================================
// CARRINHO DE COMPRAS
// ============================================

let carrinho = [];

function useCart() {
    let cart = localStorage.getItem('cart');
    if (cart) {
        carrinho = JSON.parse(cart);
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(carrinho));
}

function addToCart(produtoId, quantidade = 1) {
    const produto = produtos.find(p => p.id === produtoId);
    const itemExistente = carrinho.find(item => item.id === produtoId);
    
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            ...produto,
            quantidade: quantidade
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${produto.nome} adicionado ao carrinho!`);
}

function removeFromCart(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateQuantity(produtoId, quantidade) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        item.quantidade = quantidade;
        if (item.quantidade <= 0) {
            removeFromCart(produtoId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function updateCartCount() {
    const count = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (carrinho.length === 0) {
        cartItemsDiv.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio!</p>
            </div>
        `;
        checkoutBtn.disabled = true;
        return;
    }
    
    checkoutBtn.disabled = false;
    
    let html = '';
    carrinho.forEach(item => {
        const preco = item.promocao || item.preco;
        const total = (preco * item.quantidade).toFixed(2);
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.emoji} ${item.nome}</h4>
                    <p>R$ ${preco.toFixed(2)} x ${item.quantidade}</p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="updateQuantity(${item.id}, ${item.quantidade - 1})">-</button>
                    <span style="min-width: 30px; text-align: center;">${item.quantidade}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantidade + 1})">+</button>
                    <button class="remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartItemsDiv.innerHTML = html;
    updateCartTotal();
}

function updateCartTotal() {
    const total = carrinho.reduce((sum, item) => {
        const preco = item.promocao || item.preco;
        return sum + (preco * item.quantidade);
    }, 0);
    
    document.getElementById('cartTotal').textContent = `MZN ${total.toFixed(2)}`;
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
        renderCart();
    }
}

function checkout() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = carrinho.reduce((sum, item) => {
        const preco = item.promocao || item.preco;
        return sum + (preco * item.quantidade);
    }, 0);
    
    const mensagem = `Pedido confirmado! Total: MZN ${total.toFixed(2)}\n\nObrigado pela compra! Você receberá seu pedido em breve.`;
    alert(mensagem);
    
    // ESCOLHA UMA OPÇÃO:
    // sendPurchaseNotification(total);  // ← Opção 1: Automático via Webhook (requer configuração Make.com)
    sendWhatsAppWeb();  // ← Opção 2: WhatsApp Web (100% gratuito, sem config!)
}

// ============================================
// NOTIFICAÇÃO DE COMPRA VIA WHATSAPP
// ============================================

// 🔹 OPÇÃO 1: Enviar para Webhook (Automático - Requer Configuração)
function sendPurchaseNotification(total) {
    // Substituir WEBHOOK_URL com a URL do seu webhook do Make.com
    const WEBHOOK_URL = 'INSIRA_AQUI_SUA_URL_DO_WEBHOOK';
    
    // Prepara os dados da compra
    const purchaseData = {
        timestamp: new Date().toLocaleString('pt-BR'),
        cliente: document.getElementById('userName')?.textContent || 'Cliente Anônimo',
        itens: carrinho.map(item => ({
            nome: item.nome,
            quantidade: item.quantidade,
            preco: (item.promocao || item.preco).toFixed(2)
        })),
        total: total.toFixed(2),
        status: 'Novo Pedido'
    };
    
    // Envia os dados para o webhook
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchaseData)
    })
    .catch(error => {
        console.log('Notificação enviada (ou em processamento)');
    });
}

// 🔹 OPÇÃO 2: Enviar para WhatsApp Web (Gratuito - Sem Configuração!)
function sendWhatsAppWeb() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Monta string de items
    let itemsText = '';
    carrinho.forEach(item => {
        const preco = item.promocao || item.preco;
        const total = (preco * item.quantidade).toFixed(2);
        itemsText += `\n• ${item.nome} x${item.quantidade} = MZN ${total}`;
    });
    
    // Calcula total
    const total = carrinho.reduce((sum, item) => {
        const preco = item.promocao || item.preco;
        return sum + (preco * item.quantidade);
    }, 0);
    
    // Monta a mensagem
    const cliente = document.getElementById('userName')?.textContent || 'Cliente';
    const mensagem = `🎉 *NOVO PEDIDO - FRANGO REALEZA*

👤 Cliente: ${cliente}
📄 Data: ${new Date().toLocaleString('pt-BR')}

*PRODUTOS SOLICITADOS:*
${itemsText}

💰 *TOTAL: MZN ${total.toFixed(2)}*

Agende a sua entrega comigo!`;
    
    // Codifica para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Link do WhatsApp Web (seu número: +258848628400)
    const whatsappLink = `https://wa.me/258857534125?text=${mensagemCodificada}`;
    
    // Abre em nova aba
    window.open(whatsappLink, '_blank');
    
    // Limpa carrinho
    carrinho = [];
    saveCart();
    updateCartCount();
    toggleCart();
    showNotification('Pedido enviado! Abra o WhatsApp para confirmar.');
}

// ============================================
// RENDERIZAÇÃO DE PRODUTOS
// ============================================

function createProductCard(produto) {
    const preco = produto.promocao || produto.preco;
    const temPromocao = produto.promocao > 0;
    
    return `
        <div class="product-card">
            <div class="product-image">
                ${produto.emoji}
                ${temPromocao ? `<span class="product-badge">-${Math.round(((produto.preco - produto.promocao) / produto.preco) * 100)}%</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${produto.categoria.replace('-', ' ')}</p>
                <h3 class="product-name">${produto.nome}</h3>
                <p class="product-description">${produto.descricao}</p>
                <p class="product-rating">
                    ${'⭐'.repeat(Math.floor(produto.rating))}
                    <span>(${produto.rating})</span>
                </p>
                <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 15px;">
                    ${temPromocao ? `<span style="text-decoration: line-through; color: var(--gray-color);">MZN ${produto.preco.toFixed(2)}</span>` : ''}
                    <p class="product-price">MZN ${preco.toFixed(2)}</p>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${produto.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `;
}

function renderProducts(productosToRender, containerId) {
    const container = document.getElementById(containerId);
    const html = productosToRender.map(p => createProductCard(p)).join('');
    container.innerHTML = html;
}

// ============================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ============================================

function showPage(pageName) {
    // Oculta todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Mostra a página selecionada
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Atualiza links ativos
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    
    // Renderiza produtos se necessário
    if (pageName === 'home') {
        renderProducts(produtos.slice(0, 6), 'featuredProducts');
    } else if (pageName === 'catalog') {
        renderProducts(produtos, 'catalogProducts');
        filterProducts('todos');
    }
    
    // Fecha menu mobile
    const navList = document.querySelector('.nav-list');
    if (navList.classList.contains('active')) {
        navList.classList.remove('active');
    }
    
    // Fecha carrinho se aberto
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    }
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

// ============================================
// BUSCA E FILTROS
// ============================================

let productosFiltrados = [...produtos];

function filterProducts(categoria) {
    // Atualiza botões ativos
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtra produtos
    if (categoria === 'todos') {
        productosFiltrados = [...produtos];
    } else {
        productosFiltrados = produtos.filter(p => p.categoria === categoria);
    }
    
    renderProducts(productosFiltrados, 'catalogProducts');
}

// Busca em tempo real
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscarProdutos();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', buscarProdutos);
    }
    
    // Carrega carrinho do localStorage
    useCart();
    updateCartCount();
    
    // Carrega dados do perfil
    loadProfileData();
    
    // Renderiza produtos iniciais
    renderProducts(produtos.slice(0, 6), 'featuredProducts');
});

function buscarProdutos() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        alert('Digite algo para buscar!');
        return;
    }
    
    const resultados = produtos.filter(p => 
        p.nome.toLowerCase().includes(searchTerm) ||
        p.descricao.toLowerCase().includes(searchTerm)
    );
    
    if (resultados.length === 0) {
        alert(`Nenhum produto encontrado para "${searchTerm}"`);
        return;
    }
    
    showPage('catalog');
    renderProducts(resultados, 'catalogProducts');
    document.getElementById('searchInput').value = '';
}

// ============================================
// MENU MOBILE
// ============================================

function toggleMobileMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

// Fecha menu ao clicar fora
document.addEventListener('click', function(event) {
    const isClickInsideNav = event.target.closest('.nav');
    const isClickInsideHamburger = event.target.closest('.hamburger');
    
    if (!isClickInsideNav && !isClickInsideHamburger) {
        const navList = document.querySelector('.nav-list');
        if (navList) {
            navList.classList.remove('active');
        }
    }
});

// ============================================
// FUNÇÕES DE PERFIL
// ============================================

function openEditProfileModal() {
    const modal = document.getElementById('editProfileModal');
    
    // Preenche o formulário com dados atuais
    document.getElementById('editName').value = document.getElementById('userName').textContent || '';
    document.getElementById('editPhone').value = document.getElementById('userPhone').textContent || '';
    document.getElementById('editEmail').value = document.getElementById('userEmail').textContent || '';
    document.getElementById('editAddress').value = document.getElementById('userAddress').textContent || '';
    
    modal.style.display = 'block';
}

function closeEditProfileModal() {
    const modal = document.getElementById('editProfileModal');
    modal.style.display = 'none';
}

function saveProfile(event) {
    event.preventDefault();
    
    const name = document.getElementById('editName').value.trim();
    const phone = document.getElementById('editPhone').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    const address = document.getElementById('editAddress').value.trim();
    
    // Validações
    if (!name || !phone || !email || !address) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    // Atualiza a página com os novos dados
    document.getElementById('userName').textContent = name;
    document.getElementById('userPhone').textContent = phone;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userAddress').textContent = address;
    
    // Salva no localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userAddress', address);
    
    // Fecha o modal
    closeEditProfileModal();
    
    // Mostra notificação
    showNotification('✅ Perfil atualizado com sucesso!');
}

function clearOrderHistory() {
    if (confirm('Tem certeza que deseja eliminar todo o histórico de compras? Esta ação não pode ser desfeita.')) {
        const orderHistory = document.getElementById('orderHistory');
        orderHistory.innerHTML = '<p style="text-align: center; color: var(--gray-color); padding: 20px;">Nenhum pedido ainda.</p>';
        
        // Limpa do localStorage
        localStorage.removeItem('orderHistory');
        
        showNotification('🗑️ Histórico de compras eliminado!');
    }
}

function logout() {
    if (confirm('Deseja realmente sair?')) {
        localStorage.clear();
        alert('Você foi desconectado!');
        location.reload();
    }
}

// Carrega dados do perfil
function loadProfileData() {
    const savedName = localStorage.getItem('userName');
    const savedPhone = localStorage.getItem('userPhone');
    const savedEmail = localStorage.getItem('userEmail');
    const savedAddress = localStorage.getItem('userAddress');
    
    if (savedName) document.getElementById('userName').textContent = savedName;
    if (savedPhone) document.getElementById('userPhone').textContent = savedPhone;
    if (savedEmail) document.getElementById('userEmail').textContent = savedEmail;
    if (savedAddress) document.getElementById('userAddress').textContent = savedAddress;
}

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    const editProfileModal = document.getElementById('editProfileModal');
    if (event.target === editProfileModal) {
        editProfileModal.style.display = 'none';
    }
});

// ============================================
// NOTIFICAÇÕES
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// FECHAR MODAL AO CLICAR FORA
// ============================================

window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
}

// ============================================
// CSS PARA ANIMAÇÕES DE NOTIFICAÇÃO
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
