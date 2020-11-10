//util function for highlight
import './style.css';
export const  markMatches = (res, req) => {
    if (req) {
      const normReq = req
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .sort((a, b) => b.length - a.length);
      res = res.replace(
        new RegExp(`(${normReq.join("|")})`, "gi"),
        match => "<span>" + match + "</span>"
      );
    }
    return res;
  }