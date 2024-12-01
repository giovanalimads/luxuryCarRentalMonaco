// Seleciona os elementos das tags
const distanceTag = document.getElementById('distance-tag');
const hourlyTag = document.getElementById('hourly-tag');

// Seleciona os containers de informações
const distanceInfo = document.getElementById('distance-info');
const hourlyInfo = document.getElementById('hourly-info');

// Função para alternar o conteúdo
function toggleBookingInfo(selectedTag) {
    if (selectedTag === 'distance') {
        distanceInfo.classList.add('active'); // Mostra o conteúdo de "distance"
        hourlyInfo.classList.remove('active'); // Esconde o conteúdo de "hourly"

        distanceTag.classList.add('active'); // Destaca a tag "Distance"
        hourlyTag.classList.remove('active'); // Remove destaque da tag "Hourly"
    } else if (selectedTag === 'hourly') {
        hourlyInfo.classList.add('active'); // Mostra o conteúdo de "hourly"
        distanceInfo.classList.remove('active'); // Esconde o conteúdo de "distance"

        hourlyTag.classList.add('active'); // Destaca a tag "Hourly"
        distanceTag.classList.remove('active'); // Remove destaque da tag "Distance"
    }
}

// Adiciona os eventos de clique às tags
distanceTag.addEventListener('click', () => toggleBookingInfo('distance'));
hourlyTag.addEventListener('click', () => toggleBookingInfo('hourly'));