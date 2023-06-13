import "./style.scss";

const pageNames: string[] = ["home", "service", "contact", "about"];
const pageIDcode: any = smartCurrentPageID();

export const CurrentPage = () => {
  switch (pageIDcode) {
    case "":
    case "home":
      return pagehome();
    //   break;

    case "service":
      return pageservice();

    case "contact":
      return pagecontact();

    case "about":
      return pageabout();

    default:
      return page404();
  }
};
const pageIDcode = (pageNames: string) => {
  pageNames = tools.cleancharactersToAscii(pageNames);
  return pageNames.toLowerCase;
};
export const getMenu = () => {
  const getMenuClass = (pageNames: string) => {
    const pageIDcode = pageNames.toLowerCase;
    if (pageIDcode) === pageIDcode {return `class = "active"`} else {return ""}
  }
}
return
<nav class="menu"><ul>${pageNames.map(pageNames => `<li><a href="${pageIDCode(pageNames)}" ${getMenuClass(pageNames)}>${pageNames}</a></li>`).join("")</ul></nav>