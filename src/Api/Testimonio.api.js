/**
 * Obtener arreglo de testimonios
 * @returns Promise<Array<Testimonio> | null>
 */
export const getTestimonios = async () => {
  try {
    const resp = await fetch('Testimonio.json');
    const result = await resp.json();
    return result;
  } 
  catch (error) {
    console.log('Error al obtener los Testimonios', error);
    return null;
  }
}