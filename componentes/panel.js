import { models } from "./models";
import { ModeloPieza } from "../funciones/clases";
import { juego } from "../vistas/juego";

export const panel = {
  matriz: [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],

  nuevaPieza : null,
  
  pintaPanel: () => {
    let pantalla = document.getElementById('panel');
    
    for (let fila = 0; fila < panel.matriz.length; fila++) {
      let filaHTML = `<div class="fila d-flex">`;
  
      for (let columna = 0; columna < panel.matriz[fila].length; columna++) {
        let celdaHTML = `<div class="columna" style="width: 50px; height: 50px; border: 1px solid black;`;
  
        celdaHTML += `">`;
  
        if (panel.matriz[fila][columna] === 1) {
          celdaHTML += `<div class="bg-primary" style="width: 100%; height: 100%;"></div>`;
        } else if (panel.matriz[fila][columna] === 0) {
          celdaHTML += `<div class="bg-dark" style="width: 100%; height: 100%;"></div>`;
        }
  
        celdaHTML += `</div>`;
        filaHTML += celdaHTML;
      }
  
      filaHTML += `</div>`;
      pantalla.innerHTML += filaHTML;
    }
  },
  


  insertarPieza: () => {
    // Verificar si hay una nueva pieza para insertar
    if (panel.nuevaPieza) {
      const { matriz, x, y } = panel.nuevaPieza;

      console.log('Insertando pieza en coordenadas x:', x, 'y:', y);
      // Clonar la matriz del panel para no modificar la original directamente
      const nuevoPanel = JSON.parse(JSON.stringify(panel.matriz));

      // Bucle para insertar la pieza en la matriz del nuevo panel
      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] === 1) {
            // Calcular la posición en la matriz del panel
            const panelX = x + j;
            const panelY = y + i;

            // Verificar si la posición está dentro de los límites del panel
            if (panelX >= 0 && panelX < panel.matriz[0].length && panelY >= 0 && panelY < panel.matriz.length) {
              nuevoPanel[panelY][panelX] = 1;
            }
          }
        }
      }

      // Pintar el nuevo panel
      let pantalla = document.getElementById('panel');
      pantalla.innerHTML = '';

      for (let fila = 0; fila < nuevoPanel.length; fila++) {
        let filaHTML = `<div class="fila d-flex">`;

        for (let columna = 0; columna < nuevoPanel[fila].length; columna++) {
          let celdaHTML = `<div class="columna" style="width: 50px; height: 50px; border: 1px solid black;`;

          // Cambiar el color de los lados del panel
          if (fila === 0 || fila === nuevoPanel.length - 1 || columna === 0 || columna === nuevoPanel[fila].length - 1) {
            celdaHTML += ` background-color: lightgray;`;
          }

          celdaHTML += `">`;

          if (nuevoPanel[fila][columna] === 1) {
            celdaHTML += `<div class="bg-primary" style="width: 100%; height: 100%;"></div>`;
          } else if (nuevoPanel[fila][columna] === 0) {
            celdaHTML += `<div class="bg-dark" style="width: 100%; height: 100%;"></div>`;
          }

          celdaHTML += `</div>`;
          filaHTML += celdaHTML;
        }

        filaHTML += `</div>`;
        pantalla.innerHTML += filaHTML;
      }

      // // Limpiar la nuevaPieza
      // panel.nuevaPieza = null;
    }
  },

  borrarPieza: () => {
    console.log('panel.nuevaPieza:', panel.nuevaPieza);
    if (panel.nuevaPieza) {
      const { matriz, x, y } = panel.nuevaPieza;
      console.log('Borrando pieza en coordenadas x:', x, 'y:', y);
      // Clonar la matriz del panel para no modificar la original directamente
      const nuevoPanel = JSON.parse(JSON.stringify(panel.matriz));
  
      // Bucle para borrar la pieza de la matriz del nuevo panel
      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] === 1) {
            // Calcular la posición en la matriz del panel
            const panelX = x + j;
            const panelY = y + i;
  
            // Verificar si la posición está dentro de los límites del panel
            if (panelX >= 0 && panelX < nuevoPanel[0].length && panelY >= 0 && panelY < nuevoPanel.length) {
              nuevoPanel[panelY][panelX] = 0;
            }
          }
        }
      }
  
      // Limpiar el contenido existente del panel
      let pantalla = document.getElementById('panel');
      pantalla.innerHTML = '';  // Esto podría reemplazarse por un enfoque de manipulación de nodos más eficiente
  
      // Pintar el nuevo panel después de borrar la pieza
      panel.pintaPanel();
  
      // Limpiar la nuevaPieza
    }
  },
  
  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7);
    
    // Obtener el ancho de la pieza directamente
    const ancho = models[aleatorioModelo].matriz[0].length;
    
    let aleatorioX;
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10);
        break;
      case 2:
        aleatorioX = Math.floor(Math.random() * 9);
        break;
      case 3:
        aleatorioX = Math.floor(Math.random() * 8);
        break;
      case 4:
        aleatorioX = Math.floor(Math.random() * 7);
        break;
    }
    
    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0);
    panel.nuevaPieza = pieza;
  },
  moverDra: () => {
    if (panel.nuevaPieza) {
      // Primero, actualiza la posición de la pieza
      panel.nuevaPieza.x += 1;
  
      // Luego, borra la pieza anterior y inserta la nueva
      panel.borrarPieza();
      panel.insertarPieza();
    }
  },
  
  moverIzq: () => {
    if (panel.nuevaPieza) {
      // Primero, actualiza la posición de la pieza
      panel.nuevaPieza.x -= 1;
  
      // Luego, borra la pieza anterior y inserta la nueva
      panel.borrarPieza();
      panel.insertarPieza();
    }
  },
  
  bajar: () => {
    if (panel.nuevaPieza) {
      // Primero, actualiza la posición de la pieza
      panel.nuevaPieza.y += 1;
  
      // Luego, borra la pieza anterior y inserta la nueva
      panel.borrarPieza();
      panel.insertarPieza();
    }
  },
  
  
 
  
  

  controlTeclas: () => {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          panel.moverIzq();
          console.log('izquierda');
          break;
        case "ArrowRight":
           panel.moverDra();
          console.log('derecha');
          break;
        case "ArrowDown":
           panel.bajar();
          console.log('abajo');
          break;
        case "ArrowUp":
           panel.nuevaPieza.girar();
          console.log('arriba');
          break;
        default:
          break;
      }
    });
  },
  
};



