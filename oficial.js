
document.addEventListener('DOMContentLoaded', function() {
    // --- Referencias a elementos del DOM ---
    const productsData = {
        1: {
            title: "adidas 1",
            description: "negro",
            price: "$20"
        },
        2: {
            title: "adidas 2",
            description: "rojo",
            price: "$20"
        },
        3: {
            title: "adidas 3",
            description: "nieve",
            price: "$20"
        },
        4: {
            title: "nike just do it 4",
            description: "just do it",
            price: "$20"
        },
        5: {
            title: "jordan 23 5",
            description: "",
            price: "$20"
        },
        6: {
            title: "gucci leo 6",
            description: ".",
            price: "$20"
        },
       
        7: { 
            title: "messi 7",
            description: ".",
            price: "$20"
        },
        8: {
            title: "DIOS1 8",
            description: ".",
            price: "$20"
        },
        9: {
            title: "DIOS2 9",
            description: "",
            price: "$20"
        },
        10: {
            title: "vengador fantasma 10",
            description: "",
            price: "$20"
        },
        11: {
            title: "buuo 11",
            description: "",
            price: "$20"
        },
        12: {
            title: "dior perro 12",
            description: "",
            price: "$20"
        },
        13: {
            title: "bulls 13",
            description: "",
            price: "$20"
        },
        14: {
            title: "lamine yamal 14",
            description: "",
            price: "$20"
        },
        15: {
            title: "jodan combinad 15",
            description: "",
            price: "$20"
        },
        16: {
            title: "gucci leo amarillo 16",
            description: "",
            price: "$20"
        },
        17: {
            title:"astronauta 17",
            description: "",
            price: "$20"
        },
       
        18: { 
            title: "arcangel 18",
            description: "",
            price: "$20"
        },
        19: {
            title: "adidas combinad 19",
            description: "",
            price: "$20"
        },
        20: {
            title: "buuo 20",
            description: "",
            price: "$20"
        },
        21: {
            title: "adidas combinad 21",
            description: "",
            price: "$20"
        },
        22: {
            title: "adidas nieve 22",
            description: "",
            price: "$20"
        },
        23: {
            title: "bape 23",
            description: "",
            price: "$20"
        },
        24: {
            title: "arcangel 24",
            description: "",
            price: "$20"
        },
        25: {
            title: "adidas negro blanco 25",
            description: ".",
            price: "$20"
        },
       
        26: { 
            title: "adidas blanco rojo 26",
            description: ".",
            price: "$20"
        },
        27: {
            title: "dior perros 27",
            description: ".",
            price: "$20"
        },
        28: {
            title: "astronauta 28",
            description: "",
            price: "$20"
        },
        29: {
            title: "nike gris 29",
            description: "",
            price: "$20"
        },
        30: {
            title: "23 jordan 30",
            description: "",
            price: "$20"
        },
        31: {
            title: "chigago 31",
            description: "",
            price: "$20"
        },
        32: {
            title: "DIOR 32",
            description: "",
            price: "$20"
        },
        33: {
            title: "BART 33",
            description: "",
            price: "$20"
        },
        34: {
            title: "MADRID 34",
            description: "",
            price: "$20"
        },
        35: {
            title: "ADIDAS CARBON 35",
            description: "",
            price: "$20"
        },
        36: {
            title: "LAVA 36",
            description: "",
            price: "$20"
        },
       
        37: { 
            title: "LEO MESSI 37",
            description: "",
            price: "$20"
        },
        38: {
            title: "PRADA PERRO NEGRO 38",
            description: "",
            price: "$20"
        },
        39: {
            title: "GUCCI LEO BLANCO 39",
            description: "dee",
            price: "$20"
        },
        40: {
            title: "WEED 40",
            description: "",
            price: "$20"
        },
        41: {
            title: "GUCCI LEO AMARILLO 2 41",
            description: "",
            price: "$20"
        },
        42: {
            title: "BUUO COLORIDO 42",
            description: "",
            price: "$20"
        },
        43: {
            title: "NEYMAR 43",
            description: "",
            price: "$20"
        },
        44: {
            title: "GOKU BLACK 44",
            description: ".",
            price: "$20"
        },
       
        45: { 
            title: "PUMA DORADO 45",
            description: "",
            price: "$20"
        },
        46: {
            title: "ASTRONAUTA EN LA LUNA 46",
            description: "",
            price: "$20"
        },
        47: {
            title: "ADIDAS ASTRO 47",
            description: "",
            price: "$20"
        },
        48: {
            title: "SUPREME 48",
            description: "",
            price: "$20"
        },
        49: {
            title: "MESSI VS CR7 49",
            description: "",
            price: "$20"
        },
        50: {
            title: "ASTRONAUTA 1 50",
            description: "",
            price: "$20"
        },
        51: {
            title: "GUCCI LEO AMARILLO 51",
            description: "",
            price: "$20"
        },
        52: {
            title: "ADIDAS ROJO 2 52",
            description: "",
            price: "$20"
        },
        53: {
            title: "BART ENOJADO 53",
            description: "",
            price: "$20"
        },
        54: {
            title: "LLAMAS VERDE 54",
            description: "",
            price: "$20"
        },
        55: {
            title: "NIKE JUST DO IT 2 55",
            description: "",
            price: "$20"
        },
       
        56: { 
            title: "CHAMPIONS 56",
            description: "",
            price: "$20"
        },
        57: {
            title: "VERSACE 57",
            description: "",
            price: "$20"
        },
        58: {
            title: "JORDAN NEGRO 58",
            description: "",
            price: "$20"
        },
        59: {
            title: "ADIDAS NEGRO 59",
            description: "",
            price: "$20"
        },
        60: {
            title: "SUPER SAYA VERDE 60 ",
            description: "",
            price: "$20"
        },
        61: {
            title: "nike JORDAN 61",
            description: "",
            price: "$20"
        },
        62: {
            title: "ASTRONAUTA LUNA EN LA MANO 62",
            description: "",
            price: "$20"
        },
        63: {
            title: "MBAPE 63",
            description: ".",
            price: "$20"
        },
       
        64: { 
            title: "MUMA VERDE 64",
            description: ".",
            price: "$20"
        },
        65: {
            title: "JORADN GRAND 65",
            description: ".",
            price: "$20"
        },
        66: {
            title: "LAMBORGHINE 66",
            description: "",
            price: "$20"
        },
        67: {
            title: "JORADAN COMVINAD 67",
            description: "",
            price: "$20"
        },
        68: {
            title: "SUPER SAYA 68",
            description: "",
            price: "$20"
        },
        69: {
            title: "JORDAN NIKE 69",
            description: "",
            price: "$20"
        },
       
        71: {
            title: "ASTRONAUTA SENTADO 71",
            description: "",
            price: "$20"
        },
        72: {
            title: "LAMINE YAMAL 72",
            description: "",
            price: "$20"
        },
        73: {
            title: "GUCCI JAGUAR 73",
            description: "",
            price: "$20"
        },
        74: {
            title: "ADIDAS COMVINAD VERDE 74",
            description: "",
            price: "$20"
        },
       
        75: { 
            title: "BARCA 75",
            description: "",
            price: "$20"
        },
        76: {
            title: "BULLS 76",
            description: "",
            price: "$20"
        },
        77: {
            title: "MISSI AZUL 77",
            description: "",
            price: "$20"
        },
        78: {
            title: "ADIDAS 3 COLORES 78",
            description: "",
            price: "$20"
        },
        79: {
            title: "CALIFORNIA NEGRO 79",
            description: "",
            price: "$20"
        },
        80: {
            title: "JORDAN CIUDA",
            description: "",
            price: "$20"
        },
      999: {
            title: "CALIFORNIA BLANCO 999",
            description: "",
            price: "$20"
        },



        81: {
            title: "ADIDAS L 81",
            description: "",
            price: "$20"
        },
        82: {
            title: "DIOR PERRO L 82",
            description: ".",
            price: "$20"
        },
       
        83: { 
            title: "CALIFORNIA BLANCO L 83",
            description: ".",
            price: "$20"
        },
        84: {
            title: "CALIFORNIA NEGRO L 84",
            description: ".",
            price: "$20"
        },
        85: {
            title: "JORDAN 23 L 85",
            description: "",
            price: "$20"
        },
        suda1: {
            title: "MARIA AZUL 1",
            description: "",
            price: "$30"
        },
        suda2: {
            title: "SAN MAGUEL 2",
            description: "",
            price: "$30"
        },
        suda3: {
            title: "VEGUETA 3",
            description: "",
            price: "$30"
        },
        suda4: {
            title: "VIRGEN MARIA 4",
            description: "",
            price: "$30"
        },
        suda5: {
            title: "GOKU BLACK 5",
            description: "",
            price: "$30"
        },
        suda6: {
            title: " BLACK 6",
            description: "",
            price: "$30"
        },
        suda7: {
            title: "ARMADURA 7 ",
            description: "",
            price: "$30"
        },
        suda8: {
            title: "GOKU GRIS 8",
            description: "",
            price: "$30"
        },
        suda9: {
            title: "GOKU ROJO 9",
            description: "",
            price: "$30"
        },
        suda10: {
            title: "SUPER GOKU 10",
            description: "",
            price: "$30"
        },
        suda11: {
            title: "SAN MIGUEL GRIS 11",
            description: "",
            price: "$20"
        },
        suda12: {
            title: "TROUNKS 12",
            description: "",
            price: "$30"
        },
        suda13: {
            title: "GOKU EN LLAMAS 13",
            description: "",
            price: "$30"
        },
        suda14: {
            title: "BEGITO 14",
            description: "",
            price: "$30"
        },
        suda15: {
            title: "PRINCIPE 15",
            description: "",
            price: "$30"
        },
        suda16: {
            title: "BLACK ROSE 16",
            description: "",
            price: "$30"
        },
        suda17: {
            title: "SAN MIGUEL VENCEDOR 17",
            description: "",
            price: "$30"
        },
        suda18: {
            title: "GUKU FASE 2 18",
            description: "",
            price: "$30"
        },
        suda19: {
            title: "VEGUETA BLUE 19",
            description: "",
            price: "$30"
        },
        suda20: {
            title: "GOKU SAYAJIN 21",
            description: "",
            price: "$30"
        },
        suda22: {
            title: "GOKU 22",
            description: "",
            price: "$30"
        },
        suda23: {
            title: "GOKU ULTRA INSTINTO 23",
            description: "",
            price: "$30"
        },
        suda24: {
            title: "GOKU BLUE 24",
            description: "",
            price: "$30"
        },
        suda25: {
            title: "GOKU SUPER SAYA 25",
            description: "",
            price: "$30"
        },

        
    };

    const navbar = document.getElementById('navbar');
    const imageGrid = document.getElementById('imageGrid'); 
    const gridimage = document.getElementById('gridimage'); 
    const imageModal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const addToCartBtn = document.querySelector('#imageModal .add-to-cart-btn');
    const cartPopup = document.getElementById('cartPopup');
    const cartForm = document.getElementById('cartForm');
    const userNameInput = document.getElementById('userName');

    const cartProductImage = document.getElementById('cartProductImage');
    const cartProductTitle = document.getElementById('cartProductTitle');
    const cartProductPrice = document.getElementById('cartProductPrice');

    const colorOptionsContainer = document.getElementById('colorOptions');
    const styleOptionsContainer = document.getElementById('styleOptions');
    const sizeOptionsContainer = document.getElementById('sizeOptions');

    let productToOrder = null; 
    let currentProductData = null; 

    let selectedColorOption = '';
    let selectedStyleOption = '';
    let selectedSizeOption = '';

    // --- Inicialización ---
    setupProductClickListeners();
    setupStickyNav();
    setupGlobalCloseListeners(); 
    setupOptionButtons(colorOptionsContainer);
    setupOptionButtons(styleOptionsContainer);
    setupOptionButtons(sizeOptionsContainer);
    
    addToCartBtn.addEventListener('click', () => {
        if (currentProductData) {
            productToOrder = {
                ...currentProductData,
                color: selectedColorOption || 'No especificado',
                style: selectedStyleOption || 'No especificado',
                size: selectedSizeOption || 'No especificado'
            };
            closeImageModal();
            openCartPopup();
        }
    });

    // --- Funciones de Carga de Productos y Eventos (con delegación) ---
    function setupProductClickListeners() {
        imageGrid.addEventListener('click', function(event) {
            const clickedItem = event.target.closest('.image-item');

            if (clickedItem) {
                const productId = clickedItem.dataset.productId;
                const imageSrc = clickedItem.querySelector('img').src; 
                
                const product = productsData[productId];
                
                if (product) {
                    openImageModal(productId, imageSrc, product.title, product.description, product.price);
                } else {
                    console.warn(`Producto con ID ${productId} no encontrado en productsData.`);
                    showMessage('Lo siento, este producto no está disponible en este momento.', 'error');
                }
            }
        });
    }

    // --- Funcionalidad de Navegación Sticky ---
    function setupStickyNav() {
        const sticky = navbar.offsetTop;
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }

    // --- Funcionalidad de Páginas Emergentes (Modales de Navegación) ---
    document.querySelectorAll('.nav-item').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.page-popup').forEach(popup => {
                popup.classList.remove('show');
            });
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            const pageId = this.dataset.page;
            showPage(pageId);
        });
    });

    function showPage(pageId) {
        const popup = document.getElementById(pageId + 'Popup');
        if (popup) {
            popup.classList.add('show');
        }
    }

    // --- Funcionalidad del Modal de Imagen de Producto ---
    function openImageModal(productId, imageSrc, title, description, price) {
        currentProductData = {
            id: productId,
            title: title,
            image: imageSrc,
            description: description,
            price: price
        };
        
        modalTitle.textContent = currentProductData.title;
        modalImage.src = currentProductData.image;
        modalDescription.textContent = currentProductData.description;
        modalPrice.textContent = currentProductData.price;

        imageModal.classList.add('show');
        resetOptionSelections();
    }

    function closeImageModal() {
        imageModal.classList.remove('show');
        currentProductData = null;
    }

    // --- Funcionalidad del Carrito (Ahora, formulario de pedido de un solo producto) ---
    function openCartPopup() {
        if (!productToOrder) {
            showMessage('No hay un producto seleccionado para confirmar.', 'error');
            return;
        }

        cartProductImage.src = productToOrder.image;
        cartProductTitle.textContent = productToOrder.title;
        cartProductPrice.textContent = productToOrder.price;

        cartForm.reset();
        resetOptionSelections();
        
        cartPopup.classList.add('show');
    }

    function closeCartPopup() {
        cartPopup.classList.remove('show');
        cartForm.reset();
        resetOptionSelections();
        productToOrder = null;
        selectedColorOption = '';
        selectedStyleOption = '';
        selectedSizeOption = '';
    }

    // --- Funcionalidad de botones de selección (Color, Estilo, Talla) ---
    function setupOptionButtons(container) {
        container.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') {
                Array.from(this.children).forEach(btn => btn.classList.remove('selected'));
                e.target.classList.add('selected');

                const optionType = e.target.dataset.optionType;
                const optionValue = e.target.dataset.value;

                if (optionType === 'color') selectedColorOption = optionValue;
                else if (optionType === 'style') selectedStyleOption = optionValue;
                else if (optionType === 'size') selectedSizeOption = optionValue;
            }
        });
    }

    function resetOptionSelections() {
        document.querySelectorAll('.option-buttons button').forEach(button => {
            button.classList.remove('selected');
        });
        selectedColorOption = '';
        selectedStyleOption = '';
        selectedSizeOption = '';
    }

    // --- Envío del Formulario y Integración con WhatsApp ---
    cartForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!productToOrder) {
            showMessage('No hay un producto para confirmar el pedido.', 'error');
            return;
        }

        const userName = userNameInput.value.trim();
        if (!userName) {
            showMessage('Por favor, ingresa tu nombre.', 'error');
            return;
        }

        let whatsappMessage = `🛒 *NUEVO PEDIDO DE ${userName.toUpperCase()}*\n\n`;
        whatsappMessage += "*Detalles del Pedido:*\n";

        whatsappMessage += `1. *${productToOrder.title}*\n`;
        whatsappMessage += `   - Precio: ${productToOrder.price}\n`;
        if (selectedColorOption) whatsappMessage += `   - Color: ${selectedColorOption}\n`;
        if (selectedStyleOption) whatsappMessage += `   - Estilo: ${selectedStyleOption}\n`;
        if (selectedSizeOption) whatsappMessage += `   - Talla: ${selectedSizeOption}\n`;
        whatsappMessage += `\n`;
        
        whatsappMessage += `¡Hola! Me gustaría confirmar este pedido.`;


        const whatsappNumber = "+14088541865"; // <-- ¡CAMBIA ESTE NÚMERO!
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

        closeCartPopup();
        productToOrder = null;

        showSuccessMessage();
    });

    // Función genérica para mostrar mensajes al usuario (reemplaza alert)
    function showMessage(message, type = 'info') {
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        messageBox.style.cssText = `
            position: fixed; top: 20%; left: 50%; transform: translate(-50%, -50%);
            padding: 15px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); z-index: 4000;
            text-align: center; font-weight: bold;
        `;
        if (type === 'error') {
            messageBox.style.backgroundColor = '#f8d7da';
            messageBox.style.color = '#721c24';
        } else if (type === 'success') {
            messageBox.style.backgroundColor = '#d4edda';
            messageBox.style.color = '#155724';
        } else { // info
            messageBox.style.backgroundColor = '#e2e3e5';
            messageBox.style.color = '#383d41';
        }
        document.body.appendChild(messageBox);
        setTimeout(() => messageBox.remove(), 3000); // Eliminar después de 3 segundos
    }

    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            z-index: 3000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            /* Si la animación 'modalSlideIn' está definida en CSS global, funcionará.
               Si no, necesitarías definirla aquí o eliminarla si no la usas. */
            /* animation: modalSlideIn 0.3s ease; */ 
        `;
        successDiv.innerHTML = `
            <h3>✅ ¡Pedido Enviado!</h3>
            <p>Tu pedido ha sido enviado por WhatsApp correctamente.</p>
        `;
        document.body.appendChild(successDiv);

        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 3000);
    }

    // --- Oyentes para cerrar modales al hacer clic fuera o con Escape ---
    function setupGlobalCloseListeners() {
        document.querySelectorAll('.close-btn').forEach(button => {
            button.addEventListener('click', function() {
                const parentModal = this.closest('.modal') || this.closest('.page-popup') || this.closest('.cart-popup');
                if (parentModal) {
                    parentModal.classList.remove('show');
                    if (parentModal.id === 'cartPopup') {
                        closeCartPopup();
                    }
                    if (parentModal.id === 'imageModal') {
                        closeImageModal();
                    }
                }
            });
        });

        window.addEventListener('click', function(event) {
            if (event.target === imageModal && imageModal.classList.contains('show')) {
                closeImageModal();
            }
            if (event.target === cartPopup && cartPopup.classList.contains('show')) {
                closeCartPopup();
            }
            document.querySelectorAll('.page-popup').forEach(popup => {
                if (event.target === popup && popup.classList.contains('show')) {
                    popup.classList.remove('show');
                }
            });
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeImageModal();
                closeCartPopup();
                document.querySelectorAll('.page-popup').forEach(popup => {
                    popup.classList.remove('show');
                });
            }
        });
    }
});

// Funciones fuera del DOMContentLoaded (si las necesitas globalmente)
function toggleGradientBackground() {
    const body = document.body;
    const staticGradientImage = 'linear-gradient(to bottom, #000000 0%, #050505 50%, #05e9f5 100%)';
  
    if (body.classList.contains('gradient-animated')) {
        body.classList.remove('gradient-animated');
        body.style.backgroundImage = staticGradientImage;
        body.style.backgroundSize = 'auto';
        localStorage.setItem('gradientState', 'static');
        console.log('Degradado animado DETENIDO. Fondo estático activo (Luna).');
    } else {
        body.classList.add('gradient-animated');
        body.style.backgroundImage = '';
        body.style.backgroundSize = '';
        localStorage.setItem('gradientState', 'animated');
        console.log('Degradado animado INICIADO (Sol).');
    }
}
  
document.addEventListener('DOMContentLoaded', () => {
    const savedState = localStorage.getItem('gradientState');
    const body = document.body;
    const staticGradientImage = 'linear-gradient(to bottom, #000000 0%, #050505 50%, #05e9f5 100%)';
  
    if (savedState === 'animated') {
        body.classList.add('gradient-animated');
        body.style.backgroundImage = '';
        body.style.backgroundSize = '';
    } else {
        body.classList.remove('gradient-animated');
        body.style.backgroundImage = staticGradientImage;
        body.style.backgroundSize = 'auto';
    }
});

// Nota: tailwind.config está aquí como referencia, no es necesario si no usas Tailwind CSS
// en tu entorno local sin un proceso de compilación.
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        }
    }
}




document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica para el botón "Ver más" ---
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const moreImagesContainer = document.getElementById('moreImages');

    if (loadMoreBtn && moreImagesContainer) {
        loadMoreBtn.addEventListener('click', function() {
            // Alternar la clase 'show' para mostrar/ocultar las imágenes
            moreImagesContainer.classList.toggle('show');

            // Cambiar el texto del botón
            if (moreImagesContainer.classList.contains('show')) {
                loadMoreBtn.textContent = 'Ver menos';
            } else {
                loadMoreBtn.textContent = 'Ver más';
            }
        });
    }

    // --- Lógica de ejemplo para el modal de imágenes (Ajusta esto a tu implementación real del modal) ---
    const imageItems = document.querySelectorAll('.image-item');
    const modal = document.getElementById('imageModal'); // Asegúrate de que tu modal tenga este ID
    const modalImage = document.getElementById('modalImage'); // Asegúrate de que la imagen dentro del modal tenga este ID

    imageItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src; // Obtiene la ruta de la imagen clicada
            modalImage.src = imgSrc; // Establece la imagen en el modal
            modal.classList.add('show'); // Muestra el modal
        });
    });

    // Cerrar el modal al hacer clic fuera del contenido o en un botón de cerrar
    if (modal) {
        modal.addEventListener('click', function(event) {
            // Cierra el modal si se hace clic directamente en el fondo (no en el contenido)
            if (event.target === modal) {
                modal.classList.remove('show');
            }
            // Si tienes un botón de cerrar específico dentro de tu modal, también añádele un listener aquí
            // Ejemplo: const closeBtn = document.getElementById('closeModalBtn');
            // if (closeBtn) {
            //     closeBtn.addEventListener('click', () => modal.classList.remove('show'));
            // }
        });
    }
});