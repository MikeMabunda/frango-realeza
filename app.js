// ===== DADOS DO APLICATIVO =====
let currentUser = {
    id: 1,
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '258 82 3456789',
    country: 'Moçambique',
    birthdate: '1995-05-15',
    bio: 'Amante de filmes e séries',
    avatar: 'https://via.placeholder.com/120',
    isPremium: true,
    subscription: {
        plan: 'mensal',
        expiryDate: '2026-06-07'
    },
    watchlist: [],
    downloads: [],
    watchHistory: []
};

const contentDatabase = {
    destaque: [
        {
            id: 1,
            title: 'Stranger Things',
            category: 'series',
            year: 2024,
            rating: 4.8,
            duration: '50 min',
            director: 'The Duffer Brothers',
            cast: 'Winona Ryder, David Harbour',
            classification: '14+',
            image: 'https://via.placeholder.com/400x600?text=Stranger+Things',
            description: 'Em um mundo onde o sobrenatural é real, um grupo de amigos enfrenta mistérios assustadores.',
            fullDescription: 'Stranger Things é uma série de ficção científica que se passa em uma pequena cidade americana. Quando um menino desaparece, seus amigos descobrem segredos perturbadores sobre laboratórios secretos e dimensões paralelas. A série combina horror, mistério e drama em doses iguais.'
        },
        {
            id: 2,
            title: 'Oppenheimer',
            category: 'filmes',
            year: 2023,
            rating: 4.9,
            duration: '180 min',
            director: 'Christopher Nolan',
            cast: 'Cillian Murphy, Emily Blunt',
            classification: '14+',
            image: 'https://via.placeholder.com/400x600?text=Oppenheimer',
            description: 'A história do criador da bomba atômica durante a Segunda Guerra Mundial.',
            fullDescription: 'Um épico cinematográfico sobre J. Robert Oppenheimer e seu papel crucial no Projeto Manhattan. O filme explora a vida pessoal e profissional de Oppenheimer enquanto trabalha para criar a primeira arma nuclear.'
        },
        {
            id: 3,
            title: 'Jujutsu Kaisen',
            category: 'animes',
            year: 2023,
            rating: 4.7,
            duration: '24 min',
            director: 'Mappa Studio',
            cast: 'Yuuji Itadori, Megumi Fushiguro',
            classification: '14+',
            image: 'https://via.placeholder.com/400x600?text=Jujutsu+Kaisen',
            description: 'Um estudante descobre que é o recipiente de um poderoso demônio.',
            fullDescription: 'Yuuji Itadori é um estudante comum que se vê envolvido no mundo do Jujutsu após engolir um dedo de um antigo demônio poderoso chamado Ryomen Sukuna. Agora ele deve treinar para controlar seus novos poderes.'
        }
    ],
    filmes: [
        {
            id: 101,
            title: 'Oppenheimer',
            category: 'filmes',
            year: 2023,
            rating: 4.9,
            duration: '180 min',
            image: 'https://via.placeholder.com/400x600?text=Oppenheimer'
        },
        {
            id: 102,
            title: 'Duna: Parte Dois',
            category: 'filmes',
            year: 2024,
            rating: 4.8,
            duration: '165 min',
            image: 'https://via.placeholder.com/400x600?text=Duna+2'
        },
        {
            id: 103,
            title: 'Capitão América',
            category: 'filmes',
            year: 2024,
            rating: 4.6,
            duration: '140 min',
            image: 'https://via.placeholder.com/400x600?text=Capitao+America'
        },
        {
            id: 104,
            title: 'Deadpool & Wolverine',
            category: 'filmes',
            year: 2024,
            rating: 4.7,
            duration: '128 min',
            image: 'https://via.placeholder.com/400x600?text=Deadpool'
        },
        {
            id: 105,
            title: 'Gladiador II',
            category: 'filmes',
            year: 2023,
            rating: 4.5,
            duration: '150 min',
            image: 'https://via.placeholder.com/400x600?text=Gladiador'
        },
        {
            id: 106,
            title: 'Avatar: O Caminho da Água',
            category: 'filmes',
            year: 2022,
            rating: 4.8,
            duration: '192 min',
            image: 'https://via.placeholder.com/400x600?text=Avatar'
        }
    ],
    series: [
        {
            id: 201,
            title: 'Stranger Things',
            category: 'series',
            year: 2024,
            rating: 4.8,
            duration: '50 min',
            image: 'https://via.placeholder.com/400x600?text=Stranger+Things'
        },
        {
            id: 202,
            title: 'The Crown',
            category: 'series',
            year: 2023,
            rating: 4.6,
            duration: '55 min',
            image: 'https://via.placeholder.com/400x600?text=The+Crown'
        },
        {
            id: 203,
            title: 'Succession',
            category: 'series',
            year: 2023,
            rating: 4.9,
            duration: '60 min',
            image: 'https://via.placeholder.com/400x600?text=Succession'
        },
        {
            id: 204,
            title: 'Breaking Bad',
            category: 'series',
            year: 2013,
            rating: 4.9,
            duration: '47 min',
            image: 'https://via.placeholder.com/400x600?text=Breaking+Bad'
        },
        {
            id: 205,
            title: 'Game of Thrones',
            category: 'series',
            year: 2019,
            rating: 4.7,
            duration: '60 min',
            image: 'https://via.placeholder.com/400x600?text=Game+of+Thrones'
        },
        {
            id: 206,
            title: 'The Office',
            category: 'series',
            year: 2013,
            rating: 4.8,
            duration: '22 min',
            image: 'https://via.placeholder.com/400x600?text=The+Office'
        }
    ],
    animes: [
        {
            id: 301,
            title: 'Jujutsu Kaisen',
            category: 'animes',
            year: 2023,
            rating: 4.7,
            duration: '24 min',
            image: 'https://via.placeholder.com/400x600?text=Jujutsu+Kaisen'
        },
        {
            id: 302,
            title: 'Demon Slayer',
            category: 'animes',
            year: 2023,
            rating: 4.8,
            duration: '24 min',
            image: 'https://via.placeholder.com/400x600?text=Demon+Slayer'
        },
        {
            id: 303,
            title: 'Attack on Titan',
            category: 'animes',
            year: 2023,
            rating: 4.6,
            duration: '25 min',
            image: 'https://via.placeholder.com/400x600?text=Attack+on+Titan'
        },
        {
            id: 304,
            title: 'My Hero Academia',
            category: 'animes',
            year: 2023,
            rating: 4.7,
            duration: '24 min',
            image: 'https://via.placeholder.com/400x600?text=My+Hero'
        },
        {
            id: 305,
            title: 'Naruto',
            category: 'animes',
            year: 2017,
            rating: 4.8,
            duration: '23 min',
            image: 'https://via.placeholder.com/400x600?text=Naruto'
        },
        {
            id: 306,
            title: 'One Piece',
            category: 'animes',
            year: 2023,
            rating: 4.7,
            duration: '24 min',
            image: 'https://via.placeholder.com/400x600?text=One+Piece'
        }
    ],
    novelas: [
        {
            id: 401,
            title: 'Amor Sincero',
            category: 'novelas',
            year: 2023,
            rating: 4.4,
            duration: '45 min',
            image: 'https://via.placeholder.com/400x600?text=Amor+Sincero'
        },
        {
            id: 402,
            title: 'Coração Valente',
            category: 'novelas',
            year: 2023,
            rating: 4.5,
            duration: '46 min',
            image: 'https://via.placeholder.com/400x600?text=Coracao+Valente'
        },
        {
            id: 403,
            title: 'Paixão Ardente',
            category: 'novelas',
            year: 2022,
            rating: 4.3,
            duration: '45 min',
            image: 'https://via.placeholder.com/400x600?text=Paixao'
        },
        {
            id: 404,
            title: 'Destino de Amor',
            category: 'novelas',
            year: 2023,
            rating: 4.4,
            duration: '45 min',
            image: 'https://via.placeholder.com/400x600?text=Destino'
        },
        {
            id: 405,
            title: 'Lágrimas de Felicidade',
            category: 'novelas',
            year: 2023,
            rating: 4.5,
            duration: '45 min',
            image: 'https://via.placeholder.com/400x600?text=Lagrimas'
        },
        {
            id: 406,
            title: 'Sonhos Realizados',
            category: 'novelas',
            year: 2022,
            rating: 4.4,
            duration: '45 min',
            image: 'https://via.placeholder.com/400x600?text=Sonhos'
        }
    ],
    musicas: [
        {
            id: 501,
            title: 'Blinding Lights',
            category: 'musicas',
            artist: 'The Weeknd',
            year: 2019,
            rating: 4.9,
            duration: '3:20',
            image: 'https://via.placeholder.com/200x200?text=Blinding'
        },
        {
            id: 502,
            title: 'Shape of You',
            category: 'musicas',
            artist: 'Ed Sheeran',
            year: 2017,
            rating: 4.8,
            duration: '3:53',
            image: 'https://via.placeholder.com/200x200?text=Shape'
        },
        {
            id: 503,
            title: 'Someone You Loved',
            category: 'musicas',
            artist: 'Lewis Capaldi',
            year: 2018,
            rating: 4.7,
            duration: '3:02',
            image: 'https://via.placeholder.com/200x200?text=Someone'
        },
        {
            id: 504,
            title: 'Levitating',
            category: 'musicas',
            artist: 'Dua Lipa',
            year: 2020,
            rating: 4.8,
            duration: '3:23',
            image: 'https://via.placeholder.com/200x200?text=Levitating'
        },
        {
            id: 505,
            title: 'Bohemian Rhapsody',
            category: 'musicas',
            artist: 'Queen',
            year: 1975,
            rating: 4.9,
            duration: '5:55',
            image: 'https://via.placeholder.com/200x200?text=Bohemian'
        },
        {
            id: 506,
            title: 'Yesterday',
            category: 'musicas',
            artist: 'The Beatles',
            year: 1965,
            rating: 4.9,
            duration: '2:05',
            image: 'https://via.placeholder.com/200x200?text=Yesterday'
        }
    ]
};

let currentContent = null;
let currentCategory = 'todos';
let downloads = [];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    loadUserFromStorage();
    updateUserUI();
    displayHighlights();
    displayMovies();
    displaySeries();
    displayAnimes();
    displayNovelas();
    displayMusics();
    updateAdsVisibility();
});

// ===== LOCAL STORAGE =====
function saveUserToStorage() {
    localStorage.setItem('streamflixUser', JSON.stringify(currentUser));
}

function loadUserFromStorage() {
    const saved = localStorage.getItem('streamflixUser');
    if (saved) {
        currentUser = JSON.parse(saved);
    }
}

function updateUserUI() {
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userStatus').textContent = currentUser.isPremium ? 'Premium' : 'Grátis';
    document.getElementById('userAvatar').src = currentUser.avatar;
    document.getElementById('profileAvatar').src = currentUser.avatar;
}

// ===== EXIBIÇÃO DE CONTEÚDO =====
function createContentCard(item) {
    const card = document.createElement('div');
    card.className = 'content-card';
    
    const rating = item.rating || 4.5;
    let typeLabel = '';
    
    if (item.category === 'filmes') typeLabel = '🎬 Filme';
    else if (item.category === 'series') typeLabel = '📺 Série';
    else if (item.category === 'animes') typeLabel = '⚡ Anime';
    else if (item.category === 'novelas') typeLabel = '💕 Novela';
    else if (item.category === 'musicas') typeLabel = '🎵 Música';
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;">
            <div class="play-button">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-meta">
                <span class="card-type">${typeLabel}</span>
                <span class="card-rating">⭐ ${rating}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openContentModal(item));
    return card;
}

function displayHighlights() {
    const container = document.getElementById('highlightsContainer');
    container.innerHTML = '';
    contentDatabase.destaque.forEach(item => {
        container.appendChild(createContentCard(item));
    });
}

function displayMovies() {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';
    contentDatabase.filmes.forEach(item => {
        container.appendChild(createContentCard(item));
    });
}

function displaySeries() {
    const container = document.getElementById('seriesContainer');
    container.innerHTML = '';
    contentDatabase.series.forEach(item => {
        container.appendChild(createContentCard(item));
    });
}

function displayAnimes() {
    const container = document.getElementById('animesContainer');
    container.innerHTML = '';
    contentDatabase.animes.forEach(item => {
        container.appendChild(createContentCard(item));
    });
}

function displayNovelas() {
    const container = document.getElementById('novelasContainer');
    container.innerHTML = '';
    contentDatabase.novelas.forEach(item => {
        container.appendChild(createContentCard(item));
    });
}

function displayMusics() {
    const container = document.getElementById('musicsContainer');
    container.innerHTML = '';
    contentDatabase.musicas.forEach(item => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="card-image" style="background: linear-gradient(135deg, #e50914 0%, #cc0812 100%); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-compact-disc"></i>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta" style="flex-direction: column; gap: 5px;">
                    <span style="font-size: 0.85rem;">${item.artist}</span>
                    <span class="card-rating">⭐ ${item.rating}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openContentModal(item));
        container.appendChild(card);
    });
}

function filterByCategory(category) {
    currentCategory = category;
    const allContainers = document.querySelectorAll('.content-grid');
    allContainers.forEach(container => {
        container.innerHTML = '';
    });

    if (category === 'todos') {
        displayHighlights();
        displayMovies();
        displaySeries();
        displayAnimes();
        displayNovelas();
        displayMusics();
    } else if (category === 'filmes') {
        displayMovies();
    } else if (category === 'series') {
        displaySeries();
    } else if (category === 'animes') {
        displayAnimes();
    } else if (category === 'novelas') {
        displayNovelas();
    } else if (category === 'musicas') {
        displayMusics();
    }
}

// ===== MODAL DE DETALHES =====
function openContentModal(content) {
    currentContent = content;
    
    document.getElementById('modalTitle').textContent = content.title;
    document.getElementById('modalDesc').textContent = content.description;
    document.getElementById('modalFullDesc').textContent = content.fullDescription || content.description;
    document.getElementById('modalYear').textContent = `📅 ${content.year}`;
    document.getElementById('modalRating').textContent = `⭐ ${content.rating}/5`;
    document.getElementById('modalGenre').textContent = `${content.category.toUpperCase()}`;
    document.getElementById('modalDuration').textContent = content.duration;
    document.getElementById('modalDirector').textContent = content.director || 'N/A';
    document.getElementById('modalCast').textContent = content.cast || 'N/A';
    document.getElementById('modalClassification').textContent = content.classification || '14+';
    
    document.getElementById('modalPoster').style.backgroundImage = `url('${content.image}')`;
    document.getElementById('modalPoster').style.backgroundSize = 'cover';
    
    // Mostrar/esconder botão de download baseado no status premium
    const downloadBtn = document.getElementById('downloadBtn');
    if (!currentUser.isPremium) {
        downloadBtn.textContent = '⬇️ Download (7 dias)';
    } else {
        downloadBtn.textContent = '⬇️ Download Ilimitado';
    }
    
    openModal('contentModal');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('hidden');
    
    // Fechar ao clicar fora
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.user-menu')) {
            dropdown.classList.add('hidden');
        }
    });
}

// ===== FUNCIONALIDADES DO PLAYER =====
function playContent() {
    if (!currentContent) return;
    
    document.getElementById('videoPlayer').src = 'https://www.w3schools.com/html/mov_bbb.mp4';
    document.getElementById('playerModal').classList.remove('hidden');
    document.getElementById('contentModal').classList.add('hidden');
    
    // Registrar no histórico
    if (!currentUser.watchHistory.find(item => item.id === currentContent.id)) {
        currentUser.watchHistory.push({
            ...currentContent,
            watchedAt: new Date().toLocaleDateString('pt-BR')
        });
        saveUserToStorage();
    }
    
    showToast(`▶️ Reproduzindo: ${currentContent.title}`);
}

function closePlayer() {
    document.getElementById('playerModal').classList.add('hidden');
    document.getElementById('videoPlayer').pause();
}

function changeQuality(quality) {
    showToast(`📹 Qualidade alterada para ${quality}`);
}

function addToWatchlist() {
    if (!currentContent) return;
    
    if (!currentUser.watchlist.find(item => item.id === currentContent.id)) {
        currentUser.watchlist.push(currentContent);
        saveUserToStorage();
        showToast(`✅ ${currentContent.title} adicionado à sua lista`);
    } else {
        currentUser.watchlist = currentUser.watchlist.filter(item => item.id !== currentContent.id);
        saveUserToStorage();
        showToast(`❌ ${currentContent.title} removido da sua lista`);
    }
}

function downloadContent() {
    if (!currentContent) return;
    
    if (!currentUser.isPremium && currentUser.downloads.filter(d => d.contentId === currentContent.id).length >= 1) {
        showToast('⚠️ Plano Grátis: Máximo 1 download por conteúdo (7 dias)');
        return;
    }
    
    const download = {
        id: Date.now(),
        contentId: currentContent.id,
        title: currentContent.title,
        size: currentUser.isPremium ? 'Sem Limite' : '500MB (7 dias)',
        downloadedAt: new Date().toLocaleDateString('pt-BR'),
        expiresAt: !currentUser.isPremium ? new Date(Date.now() + 7*24*60*60*1000).toLocaleDateString('pt-BR') : 'Nunca'
    };
    
    currentUser.downloads.push(download);
    saveUserToStorage();
    showToast(`⬇️ ${currentContent.title} foi baixado com sucesso!`);
}

function shareContent() {
    if (!currentContent) return;
    
    const shareText = `Estou assistindo "${currentContent.title}" na StreamFlix! Você também deveria ver! 🎬`;
    
    if (navigator.share) {
        navigator.share({
            title: currentContent.title,
            text: shareText,
            url: window.location.href
        });
    } else {
        // Copiar para clipboard
        navigator.clipboard.writeText(shareText);
        showToast('📋 Texto copiado para compartilhar!');
    }
}

// ===== PREMIUM E PAGAMENTOS =====
function openPremiumModal() {
    openModal('premiumModal');
}

function selectPlan(plan) {
    closeModal('premiumModal');
    
    let price = '';
    if (plan === 'mensal') {
        price = '500 MZN/mês';
    } else if (plan === 'anual') {
        price = '4,800 MZN/ano';
    }
    
    showToast(`📦 Plano ${plan === 'mensal' ? 'Mensal' : 'Anual'} selecionado: ${price}`);
    
    // Abrir modal de pagamento após 500ms
    setTimeout(() => openModal('paymentModal'), 500);
}

function selectPaymentMethod(method) {
    const form = document.getElementById('paymentForm');
    const methodDisplay = document.getElementById('selectedPaymentMethod');
    
    form.classList.remove('hidden');
    
    // Esconder todos os formulários
    document.getElementById('mpesaForm').classList.add('hidden');
    document.getElementById('emolaForm').classList.add('hidden');
    document.getElementById('cardForm').classList.add('hidden');
    
    if (method === 'mpesa') {
        methodDisplay.textContent = 'Pagamento via M-Pesa';
        document.getElementById('mpesaForm').classList.remove('hidden');
    } else if (method === 'emola') {
        methodDisplay.textContent = 'Pagamento via E-Mola';
        document.getElementById('emolaForm').classList.remove('hidden');
    } else if (method === 'cartao') {
        methodDisplay.textContent = 'Pagamento via Cartão de Crédito';
        document.getElementById('cardForm').classList.remove('hidden');
    }
}

function processPayment(event) {
    event.preventDefault();
    
    // Simular processamento de pagamento
    showToast('🔄 Processando pagamento...');
    
    setTimeout(() => {
        currentUser.isPremium = true;
        currentUser.subscription = {
            plan: 'mensal',
            expiryDate: new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString('pt-BR')
        };
        saveUserToStorage();
        updateUserUI();
        updateAdsVisibility();
        
        closeModal('paymentModal');
        showToast('✅ Pagamento realizado com sucesso! Bem-vindo ao Premium 🎉');
    }, 2000);
}

// ===== PERFIL =====
function openProfile() {
    document.getElementById('profileName').value = currentUser.name;
    document.getElementById('profileEmail').value = currentUser.email;
    document.getElementById('profilePhone').value = currentUser.phone;
    document.getElementById('profileCountry').value = currentUser.country;
    document.getElementById('profileBirthdate').value = currentUser.birthdate;
    document.getElementById('profileBio').value = currentUser.bio;
    
    openModal('profileModal');
}

function saveProfile(event) {
    event.preventDefault();
    
    currentUser.name = document.getElementById('profileName').value;
    currentUser.email = document.getElementById('profileEmail').value;
    currentUser.phone = document.getElementById('profilePhone').value;
    currentUser.country = document.getElementById('profileCountry').value;
    currentUser.birthdate = document.getElementById('profileBirthdate').value;
    currentUser.bio = document.getElementById('profileBio').value;
    
    saveUserToStorage();
    updateUserUI();
    
    closeModal('profileModal');
    showToast('✅ Perfil atualizado com sucesso!');
}

function changeAvatar() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            currentUser.avatar = event.target.result;
            saveUserToStorage();
            updateUserUI();
            showToast('🖼️ Avatar atualizado!');
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

// ===== DOWNLOADS =====
function openMyDownloads() {
    displayDownloads();
    openModal('downloadsModal');
}

function displayDownloads() {
    const list = document.getElementById('downloadsList');
    list.innerHTML = '';
    
    if (currentUser.downloads.length === 0) {
        list.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-light);">Nenhum download realizado ainda</p>';
        return;
    }
    
    currentUser.downloads.forEach(download => {
        const item = document.createElement('div');
        item.className = 'download-item';
        item.innerHTML = `
            <img src="https://via.placeholder.com/80x120" alt="${download.title}">
            <div class="download-info">
                <h4>${download.title}</h4>
                <p class="download-size">Tamanho: ${download.size}</p>
                <p class="download-size">Baixado: ${download.downloadedAt}</p>
                <p class="download-size">Expira: ${download.expiresAt}</p>
            </div>
            <button class="download-delete" onclick="deleteDownload(${download.id})">
                <i class="fas fa-trash"></i> Remover
            </button>
        `;
        list.appendChild(item);
    });
}

function deleteDownload(downloadId) {
    currentUser.downloads = currentUser.downloads.filter(d => d.id !== downloadId);
    saveUserToStorage();
    displayDownloads();
    showToast('🗑️ Download removido');
}

function filterDownloads(category) {
    // Implementar filtro
    displayDownloads();
}

// ===== HISTÓRICO =====
function openWatchHistory() {
    displayHistory();
    openModal('historyModal');
}

function displayHistory() {
    const list = document.getElementById('historyList');
    list.innerHTML = '';
    
    if (currentUser.watchHistory.length === 0) {
        list.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-light);">Seu histórico está vazio</p>';
        return;
    }
    
    currentUser.watchHistory.reverse().forEach(item => {
        const histItem = document.createElement('div');
        histItem.className = 'history-item';
        histItem.innerHTML = `
            <img src="https://via.placeholder.com/80x120" alt="${item.title}">
            <div class="history-info">
                <h4>${item.title}</h4>
                <p class="history-date">Assistido: ${item.watchedAt}</p>
            </div>
        `;
        list.appendChild(histItem);
    });
}

function clearHistory() {
    if (confirm('Tem certeza que deseja limpar seu histórico?')) {
        currentUser.watchHistory = [];
        saveUserToStorage();
        displayHistory();
        showToast('🗑️ Histórico limpo');
    }
}

// ===== CONFIGURAÇÕES =====
function openSettings() {
    document.getElementById('defaultQuality').value = 'Auto';
    document.getElementById('autoplay').checked = true;
    document.getElementById('personalization').checked = true;
    document.getElementById('notifNew').checked = true;
    document.getElementById('notifPromo').checked = false;
    
    openModal('settingsModal');
}

function saveSettings() {
    showToast('⚙️ Configurações salvas com sucesso!');
    closeModal('settingsModal');
}

function changePassword() {
    const newPassword = prompt('Digite sua nova senha:');
    if (newPassword) {
        showToast('🔐 Senha alterada com sucesso!');
    }
}

function twoFactorAuth() {
    showToast('🔒 Autenticação de dois fatores habilitada!');
}

// ===== ANÚNCIOS =====
function updateAdsVisibility() {
    const banner = document.getElementById('adsBanner');
    const premiumBanner = document.getElementById('premiumBanner');
    
    if (currentUser.isPremium) {
        banner.classList.add('hidden');
        premiumBanner.classList.add('hidden');
    } else {
        banner.classList.remove('hidden');
        premiumBanner.classList.remove('hidden');
    }
}

function closeAds() {
    document.getElementById('adsBanner').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('adsBanner').classList.remove('hidden');
    }, 30000); // Mostrar novamente após 30 segundos
}

// ===== NOTIFICAÇÕES (TOAST) =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ===== BUSCA =====
document.getElementById('searchInput').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('searchBtn').addEventListener('click', performSearch);

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (!query) {
        filterByCategory('todos');
        return;
    }
    
    const allContent = [
        ...contentDatabase.filmes,
        ...contentDatabase.series,
        ...contentDatabase.animes,
        ...contentDatabase.novelas,
        ...contentDatabase.musicas
    ];
    
    const results = allContent.filter(item => 
        item.title.toLowerCase().includes(query) ||
        (item.artist && item.artist.toLowerCase().includes(query))
    );
    
    const container = document.getElementById('highlightsContainer');
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-light);">Nenhum resultado encontrado</p>';
    } else {
        results.forEach(item => {
            container.appendChild(createContentCard(item));
        });
    }
    
    showToast(`🔍 ${results.length} resultado(s) encontrado(s)`);
}

// ===== FUNÇÃO DE LOGOUT =====
function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('streamflixUser');
        showToast('👋 Até logo!');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}
