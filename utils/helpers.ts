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

const imageUrl = (options: string, image: string) => `https://res.cloudinary.com/numismatics-catalog/image/upload${
  options !== null ? options : '/'
}v1602685196/${image}`;

function getExtension(os: string) {
  let extension;

  if (os === 'Windows') {
    extension = 'webp';
  }

  if (os === 'iOS') {
    extension = 'jpg';
  }

  if (os === 'Android') {
    extension = 'webp';
  }

  if (os !== 'Windows' && os !== 'iOS' && os !== 'Android') {
    extension = 'png';
  }

  return extension;
}

function imgOptions(options: any) {
  if (options !== null) {
    return `/${options}/`;
  }

  if (options === null) {
    return '/';
  }
}

export const formatImageUrl = (
  image: string,
  options: string,
  os: string,
) => `${imageUrl(imgOptions(options), image)}.${getExtension(os)}`;
