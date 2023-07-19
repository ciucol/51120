const persona = {
  nombre: 'Mate',
  apellido: 'Naran',
  edad: 3,
  pais: 'col'
}

const curso = {
  titulo: 'Backend',
  duracion: '6 meses'
}

const auth = {
  usuario: 'soyMate',
  password: 'mate123'
}

const estudiante = {
  ...persona,
  ...curso,
  ...auth
}

const { password, ...rest } = estudiante

const estudianteARetornar = {
  ...rest
}

console.log(estudianteARetornar)