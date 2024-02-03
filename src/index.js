import { panel } from "../componentes/panel";
import { ModeloPieza } from "../funciones/clases";

// Importamos la clase modeloPieza

// Instanciamos un objeto de la clase modeloPieza
const nuevaPieza = new ModeloPieza(0, 0, 0, 0);

// Insertimos la nuevaPieza en la propiedad 'nuevaPieza' del panel
panel.nuevaPieza = nuevaPieza;

// Insertamos la pieza en la matriz del panel
panel.insertarPieza();

// Llamamos al método para pintar el panel y refrescar la interfaz
panel.pintaPanel();
