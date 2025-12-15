// Все 118 элементов с русскими названиями
const elements = [
    { symbol: 'H', name: 'Водород', number: 1, row: 1, col: 1 },
    { symbol: 'He', name: 'Гелий', number: 2, row: 1, col: 18 },
    { symbol: 'Li', name: 'Литий', number: 3, row: 2, col: 1 },
    { symbol: 'Be', name: 'Бериллий', number: 4, row: 2, col: 2 },
    { symbol: 'B', name: 'Бор', number: 5, row: 2, col: 13 },
    { symbol: 'C', name: 'Углерод', number: 6, row: 2, col: 14 },
    { symbol: 'N', name: 'Азот', number: 7, row: 2, col: 15 },
    { symbol: 'O', name: 'Кислород', number: 8, row: 2, col: 16 },
    { symbol: 'F', name: 'Фтор', number: 9, row: 2, col: 17 },
    { symbol: 'Ne', name: 'Неон', number: 10, row: 2, col: 18 },
    { symbol: 'Na', name: 'Натрий', number: 11, row: 3, col: 1 },
    { symbol: 'Mg', name: 'Магний', number: 12, row: 3, col: 2 },
    { symbol: 'Al', name: 'Алюминий', number: 13, row: 3, col: 13 },
    { symbol: 'Si', name: 'Кремний', number: 14, row: 3, col: 14 },
    { symbol: 'P', name: 'Фосфор', number: 15, row: 3, col: 15 },
    { symbol: 'S', name: 'Сера', number: 16, row: 3, col: 16 },
    { symbol: 'Cl', name: 'Хлор', number: 17, row: 3, col: 17 },
    { symbol: 'Ar', name: 'Аргон', number: 18, row: 3, col: 18 },
    { symbol: 'K', name: 'Калий', number: 19, row: 4, col: 1 },
    { symbol: 'Ca', name: 'Кальций', number: 20, row: 4, col: 2 },
    { symbol: 'Sc', name: 'Скандий', number: 21, row: 4, col: 3 },
    { symbol: 'Ti', name: 'Титан', number: 22, row: 4, col: 4 },
    { symbol: 'V', name: 'Ванадий', number: 23, row: 4, col: 5 },
    { symbol: 'Cr', name: 'Хром', number: 24, row: 4, col: 6 },
    { symbol: 'Mn', name: 'Марганец', number: 25, row: 4, col: 7 },
    { symbol: 'Fe', name: 'Железо', number: 26, row: 4, col: 8 },
    { symbol: 'Co', name: 'Кобальт', number: 27, row: 4, col: 9 },
    { symbol: 'Ni', name: 'Никель', number: 28, row: 4, col: 10 },
    { symbol: 'Cu', name: 'Медь', number: 29, row: 4, col: 11 },
    { symbol: 'Zn', name: 'Цинк', number: 30, row: 4, col: 12 },
    { symbol: 'Ga', name: 'Галлий', number: 31, row: 4, col: 13 },
    { symbol: 'Ge', name: 'Германий', number: 32, row: 4, col: 14 },
    { symbol: 'As', name: 'Мышьяк', number: 33, row: 4, col: 15 },
    { symbol: 'Se', name: 'Селен', number: 34, row: 4, col: 16 },
    { symbol: 'Br', name: 'Бром', number: 35, row: 4, col: 17 },
    { symbol: 'Kr', name: 'Криптон', number: 36, row: 4, col: 18 },
    { symbol: 'Rb', name: 'Рубидий', number: 37, row: 5, col: 1 },
    { symbol: 'Sr', name: 'Стронций', number: 38, row: 5, col: 2 },
    { symbol: 'Y', name: 'Иттрий', number: 39, row: 5, col: 3 },
    { symbol: 'Zr', name: 'Цирконий', number: 40, row: 5, col: 4 },
    { symbol: 'Nb', name: 'Ниобий', number: 41, row: 5, col: 5 },
    { symbol: 'Mo', name: 'Молибден', number: 42, row: 5, col: 6 },
    { symbol: 'Tc', name: 'Технеций', number: 43, row: 5, col: 7 },
    { symbol: 'Ru', name: 'Рутений', number: 44, row: 5, col: 8 },
    { symbol: 'Rh', name: 'Родий', number: 45, row: 5, col: 9 },
    { symbol: 'Pd', name: 'Палладий', number: 46, row: 5, col: 10 },
    { symbol: 'Ag', name: 'Серебро', number: 47, row: 5, col: 11 },
    { symbol: 'Cd', name: 'Кадмий', number: 48, row: 5, col: 12 },
    { symbol: 'In', name: 'Индий', number: 49, row: 5, col: 13 },
    { symbol: 'Sn', name: 'Олово', number: 50, row: 5, col: 14 },
    { symbol: 'Sb', name: 'Сурьма', number: 51, row: 5, col: 15 },
    { symbol: 'Te', name: 'Теллур', number: 52, row: 5, col: 16 },
    { symbol: 'I', name: 'Йод', number: 53, row: 5, col: 17 },
    { symbol: 'Xe', name: 'Ксенон', number: 54, row: 5, col: 18 },
    { symbol: 'Cs', name: 'Цезий', number: 55, row: 6, col: 1 },
    { symbol: 'Ba', name: 'Барий', number: 56, row: 6, col: 2 },
    { symbol: 'La', name: 'Лантан', number: 57, row: 8, col: 3 },
    { symbol: 'Ce', name: 'Церий', number: 58, row: 8, col: 4 },
    { symbol: 'Pr', name: 'Празеодим', number: 59, row: 8, col: 5 },
    { symbol: 'Nd', name: 'Неодим', number: 60, row: 8, col: 6 },
    { symbol: 'Pm', name: 'Прометий', number: 61, row: 8, col: 7 },
    { symbol: 'Sm', name: 'Самарий', number: 62, row: 8, col: 8 },
    { symbol: 'Eu', name: 'Европий', number: 63, row: 8, col: 9 },
    { symbol: 'Gd', name: 'Гадолиний', number: 64, row: 8, col: 10 },
    { symbol: 'Tb', name: 'Тербий', number: 65, row: 8, col: 11 },
    { symbol: 'Dy', name: 'Диспрозий', number: 66, row: 8, col: 12 },
    { symbol: 'Ho', name: 'Гольмий', number: 67, row: 8, col: 13 },
    { symbol: 'Er', name:'Эрбий', number: 68, row: 8, col: 14 },
    { symbol: 'Tm', name: 'Тулий', number: 69, row: 8, col: 15 },
    { symbol: 'Yb', name: 'Иттербий', number: 70, row: 8, col: 16 },
    { symbol: 'Lu', name: 'Лютеций', number: 71, row: 8, col: 17 },
    { symbol: 'Hf', name: 'Гафний', number: 72, row: 6, col: 4 },
    { symbol: 'Ta', name: 'Тантал', number: 73, row: 6, col: 5 },
    { symbol: 'W', name: 'Вольфрам', number: 74, row: 6, col: 6 },
    { symbol: 'Re', name: 'Рений', number: 75, row: 6, col: 7 },
    { symbol: 'Os', name: 'Осмий', number: 76, row: 6, col: 8 },
    { symbol: 'Ir', name: 'Иридий', number: 77, row: 6, col: 9 },
    { symbol: 'Pt', name: 'Платина', number: 78, row: 6, col: 10 },
    { symbol: 'Au', name: 'Золото', number: 79, row: 6, col: 11 },
    { symbol: 'Hg', name: 'Ртуть', number: 80, row: 6, col: 12 },
    { symbol: 'Tl', name: 'Таллий', number: 81, row: 6, col: 13 },
    { symbol: 'Pb', name: 'Свинец', number: 82, row: 6, col: 14 },
    { symbol: 'Bi', name: 'Висмут', number: 83, row: 6, col: 15 },
    { symbol: 'Po', name: 'Полоний', number: 84, row: 6, col: 16 },
    { symbol: 'At', name: 'Астат', number: 85, row: 6, col: 17 },
    { symbol: 'Rn', name: 'Радон', number: 86, row: 6, col: 18 },
    { symbol: 'Fr', name: 'Франций', number: 87, row: 7, col: 1 },
    { symbol: 'Ra', name: 'Радий', number: 88, row: 7, col: 2 },
    { symbol: 'Ac', name: 'Актиний', number: 89, row: 9, col: 3 },
    { symbol: 'Th', name: 'Торий', number: 90, row: 9, col: 4 },
    { symbol: 'Pa', name: 'Протактиний', number: 91, row: 9, col: 5 },
    { symbol: 'U', name: 'Уран', number: 92, row: 9, col: 6 },
    { symbol: 'Np', name: 'Нептуний', number: 93, row: 9, col: 7 },
    { symbol: 'Pu', name: 'Плутоний', number: 94, row: 9, col: 8 },
    { symbol: 'Am', name: 'Америций', number: 95, row: 9, col: 9 },
    { symbol: 'Cm', name: 'Кюрий', number: 96, row: 9, col: 10 },
    { symbol: 'Bk', name: 'Берклий', number: 97, row: 9, col: 11 },
    { symbol: 'Cf', name: 'Калифорний', number: 98, row: 9, col: 12 },
    { symbol: 'Es', name: 'Эйнштейний', number: 99, row: 9, col: 13 },
    { symbol: 'Fm', name: 'Фермий', number: 100, row: 9, col: 14 },
    { symbol: 'Md', name: 'Менделевий', number: 101, row: 9, col: 15 },
    { symbol: 'No', name: 'Нобелий', number: 102, row: 9, col: 16 },
    { symbol: 'Lr', name: 'Лоуренсий', number: 103, row: 9, col: 17 },
    { symbol: 'Rf', name: 'Резерфордий', number: 104, row: 7, col: 4 },
    { symbol: 'Db', name: 'Дубний', number: 105, row: 7, col: 5 },
    { symbol: 'Sg', name: 'Сиборгий', number: 106, row: 7, col: 6 },
    { symbol: 'Bh', name: 'Борий', number: 107, row: 7, col: 7 },
    { symbol: 'Hs', name: 'Хассий', number: 108, row: 7, col: 8 },
    { symbol: 'Mt', name: 'Мейтнерий', number: 109, row: 7, col: 9 },
    { symbol: 'Ds', name: 'Дармштадтий', number: 110, row: 7, col: 10 },
    { symbol: 'Rg', name: 'Рентгений', number: 111, row: 7, col: 11 },
    { symbol: 'Cn', name: 'Коперниций', number: 112, row: 7, col: 12 },
    { symbol: 'Nh', name: 'Нихоний', number: 113, row: 7, col: 13 },
    { symbol: 'Fl', name: 'Флеровий', number: 114, row: 7, col: 14 },
    { symbol: 'Mc', name: 'Московий', number: 115, row: 7, col: 15 },
    { symbol: 'Lv', name: 'Ливерморий', number: 116, row: 7, col: 16 },
    { symbol: 'Ts', name: 'Теннессин', number: 117, row: 7, col: 17 },
    { symbol: 'Og', name: 'Оганесон', number: 118, row: 7, col: 18 }
];

function createPuzzle() {
    const puzzleContainer = document.getElementById('puzzle');
    const piecesContainer = document.getElementById('pieces');
    
    elements.forEach(element => {
        const slot = document.createElement('div');
        slot.className = 'element-slot';
        slot.dataset.symbol = element.symbol;
        slot.dataset.number = element.number;
        slot.style.gridRow = element.row;
        slot.style.gridColumn = element.col;
        puzzleContainer.appendChild(slot);
        
        const piece = document.createElement('div');
        piece.className = 'element-piece';
        piece.draggable = true;
        piece.dataset.symbol = element.symbol;
        piece.innerHTML = `
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
        `;
        piecesContainer.appendChild(piece);
    });
    
    shufflePieces();
}

function shufflePieces() {
    const container = document.getElementById('pieces');
    const pieces = Array.from(container.querySelectorAll('.element-piece'));
    
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(pieces[j]);
    }
}

function updateProgress() {
    const completed = document.querySelectorAll('.element-slot .element-piece').length;
    document.getElementById('progress').textContent = `${completed} / 118`;
}

function checkComplete() {
    const completedElements = document.querySelectorAll('.element-slot .element-piece');
    updateProgress();
    
    if (completedElements.length === elements.length) {
        setTimeout(() => {
            alert('🎉 Поздравляю! Таблица Менделеева собрана полностью!');
        }, 100);
    }
}

function resetElementStyles(element) {
    element.style.opacity = '';
    element.style.transform = '';
    element.style.position = '';
    element.style.left = '';
    element.style.top = '';
    element.style.zIndex = '';
    element.style.pointerEvents = '';
}

// Desktop drag & drop
document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('element-piece')) {
        e.dataTransfer.setData('text/plain', e.target.dataset.symbol);
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    const symbol = e.dataTransfer.getData('text/plain');
    const slot = e.target.closest('.element-slot');
    
    if (slot && slot.dataset.symbol === symbol) {
        const piece = document.querySelector(`[data-symbol="${symbol}"].element-piece`);
        slot.appendChild(piece);
        piece.draggable = false;
        piece.style.cursor = 'default';
        checkComplete();
    }
});

// Mobile touch events (исправленная версия)
let draggedElement = null;
let touchOffset = { x: 0, y: 0 };

document.addEventListener('touchstart', (e) => {
    const piece = e.target.closest('.element-piece');
    if (piece && piece.draggable) {
        e.preventDefault();
        draggedElement = piece;
        
        const touch = e.touches[0];
        const rect = piece.getBoundingClientRect();
        touchOffset.x = touch.clientX - rect.left;
        touchOffset.y = touch.clientY - rect.top;
        
        piece.style.opacity = '0.7';
        piece.style.transform = 'scale(1.1)';
        piece.style.zIndex = '1000';
        piece.style.position = 'fixed';
        piece.style.pointerEvents = 'none';
    }
});

document.addEventListener('touchmove', (e) => {
    if (draggedElement) {
        e.preventDefault();
        const touch = e.touches[0];
        draggedElement.style.left = (touch.clientX - touchOffset.x) + 'px';
        draggedElement.style.top = (touch.clientY - touchOffset.y) + 'px';
    }
});

document.addEventListener('touchend', (e) => {
    if (draggedElement) {
        e.preventDefault();
        const touch = e.changedTouches[0];
        
        // Временно включаем pointer events для поиска элемента
        draggedElement.style.pointerEvents = 'none';
        const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        const slot = elementBelow?.closest('.element-slot');
        
        if (slot && slot.dataset.symbol === draggedElement.dataset.symbol) {
            // Успешное размещение
            slot.appendChild(draggedElement);
            draggedElement.draggable = false;
            resetElementStyles(draggedElement);
            checkComplete();
        } else {
            // Возвращаем элемент обратно
            resetElementStyles(draggedElement);
        }
        
        draggedElement = null;
    }
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    createPuzzle();
    updateProgress();
});