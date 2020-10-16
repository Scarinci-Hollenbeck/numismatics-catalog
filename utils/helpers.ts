export const makeTitle = (link: string) => {
  const modLink = link.replace(/-|\s/g, ' ').replace(/\+/g, ' ');
  return modLink.charAt(0).toUpperCase() + modLink.slice(1);
};

export const makeUrl = (link: string) => link.toLowerCase().replace(/\s/g, '-');

export const postFetcher = async (url: string, data: any) => {
  const request = await fetch(url, {
    method: 'POST',
    body: data,
  });

  return request.json();
};

export async function getFetcher(url: string) {
  const res = await fetch(url);
  return res.json();
}

export function createMarkup(content: string) {
  return { __html: content };
}

export function formatDate(date: string) {
  const dateObj = new Date(date);
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const results = `${
    month[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  return results;
}
