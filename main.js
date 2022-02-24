const ProyectosFinales = [10, 3, 4, 7, 1];

for (let i = 0 ; i < 5 ; i++) {
    console.log(ProyectosFinales[i]);
    if (ProyectosFinales[i] >= 6) {
        console.log("Éste alumno aprobó");
    }
    else if (ProyectosFinales[i] < 6) {
        console.log("Éste alumno desaprobó");
    }
}