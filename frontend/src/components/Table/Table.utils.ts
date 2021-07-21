export const formatDate = (date: Date) => {

    let dd: number | string = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm: number | string = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy: number | string = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

export const checkFalseDate = (date: string) => {
  const [day, month, year] = date.split('.')

  if (+day > 31 || +day < 1) {
    return 'False amount of days'
  }

  if (+month > 12 || +month < 1) {
    return 'False month'
  }

  if (+year > 2021 || +year < 1980) {
    return 'False year'
  }

  return
}

export const checkDateSequence = (dateBefore: string, dateAfter: string) => {
  const [dayFirst, monthFirst, yearFirst] = dateBefore.split('.')
  const [daySecond, monthSecond, yearSecond] = dateBefore.split('.')

  const firstDate = new Date( +yearFirst, +monthFirst, +dayFirst )
  const secondDate = new Date( +yearSecond, +monthSecond, +daySecond )

  return firstDate <= secondDate
}