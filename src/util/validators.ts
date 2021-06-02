const invalid = {
  checkNombre(nombre: string): boolean {
    const regex = /^[-\w\s]+$/;
    return nombre.length <= 2 || nombre.length > 40 || !regex.test(nombre);
  },
  checkInst(institucion: string): boolean {
    const regex = /^[-\w\s]+$/;
    return (
      institucion.length <= 2 ||
      institucion.length > 40 ||
      !regex.test(institucion)
    );
  },
  checkDesc(descripcion: string): boolean {
    return descripcion.length <= 5 || descripcion.length > 200;
  },
  checkDescrip(descripcion: string): boolean {
    return descripcion.length <= 2;
  },
  checkLugar(lugar: string): boolean {
    return lugar.length <= 2;
  },
  checkLink(link: string): [boolean, string] {
    if (
      link.length <= 5 ||
      link.length > 200 ||
      !link.includes("drive.google")
    ) {
      return [true, ""];
    } else {
      const temp = this.getIdFromUrl(link);
      const res = `https://drive.google.com/uc?id=${temp}&export=download`;
      return [false, res];
    }
  },
  checkDate(date: string) {
    return date.length <= 2;
  },
  getIdFromUrl(url: string): RegExpMatchArray | null {
    return url.match(/[-\w]{25,}/);
  },
};

export default invalid;
