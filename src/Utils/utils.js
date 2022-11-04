import parse from 'html-react-parser';

export const parseHtml = (data) => {
    if (!data) return "";
    return parse(data);
}