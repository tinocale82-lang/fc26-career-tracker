// Datos simulados
let jugadores = [
    { nombre: "Lionel Messi", equipo: "PSG", goles: 15 },
    { nombre: "Kylian Mbappé", equipo: "PSG", goles: 22 },
    { nombre: "Marcus Rashford", equipo: "Man United", goles: 12 }
];

// Render inicial lista de jugadores
function cargarJugadores() {
    const lista = document.getElementById("players-list");
    lista.innerHTML = "";
    jugadores.forEach(p => {
        lista.innerHTML += `<div class="player-card">
            <h3>${p.nombre}</h3>
            <p>Equipo: ${p.equipo}</p>
            <p>Goles: ${p.goles}</p>
        </div>`;
    });
}

// Fun-busqueda
function buscarJugador() {
    const query = document.getElementById("search-player").value.toLowerCase();
    const lista = jugadores.filter(j => j.nombre.toLowerCase().includes(query));
    const container = document.getElementById("players-list");
    container.innerHTML = "";
    lista.forEach(p => {
        container.innerHTML += `<div class="player-card">
            <h3>${p.nombre}</h3>
            <p>Equipo: ${p.equipo}</p>
            <p>Goles: ${p.goles}</p>
        </div>`;
    });
}

// Llamada inicial
cargarJugadores();
