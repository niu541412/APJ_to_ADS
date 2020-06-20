// ==UserScript==
// @name         Astronomy Journal to ADS
// @namespace    niu541412
// @version      0.9
// @description  Add direct link to NASA/ADS on iop.org webpage for astronomy papers.
// @author       niu541412@gmail.com
// @match        *://iopscience.iop.org/article/*
// @match        *://www.nature.com/articles/*
// @match        *://science.sciencemag.org/*
// @match        *://www.annualreviews.org/*
// @grant        none
// @icon         data:image/gif;base64,R0lGODdhPAA8ANUAAAAAAAAAUgAAYwAQQggQWhAQYwAYUhAYShAYYxgYUgAhWhAhcwApYzEpaxAxYxAxayExazkxhDE5aylCczlCc0pCe0JKe0JKhEpKhClSe0JShEpSjDlajEpahFJae0pjlGNjnDlrhEp7nFp7nHN7rXt7pXOUrZyctYylvZy1xpy91r291s7O1sbW3tbW5+/v7/f39////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAADIALAAAAAA8ADwAAAb/QIZQqCAyYoRkssgowpRLIxLKLE6VVcZTGWMKoQQYYjwGi8kIcAydhp7JavQ1ye4q7go2DH8vyPl5f3x+ZHt4MQwFfgwGUmBZW0qNTUePjlCTTlBdQwxtSTCdnpuiaqKfYaWbcgRwWXZ4bC+AdWB1tGgvBAq7iGi2YJRFvGCraMKjUMioXQhDbKKUwo0GeX6KCLB3xcAEioFjSHCZo2lt563pfAgKcwTR8EO7h56eZXSEbPpjxLsEiJ0ACaS1iYkzaKLuUGqESAE2V3gMcAMTAMuvdK2QTdzIsaPHes4WHdxHcow9kiBBljzmTEjLeDBjDhmGbOBAjzhz6iyGJt/K/58kFSUaWoAogqJjfBaVyVSmSZpNaCq0iQrjzo4u1lz1RycpoZNAVyoKgOgaUrEIm0Z759RAjGqU2A2bK1CurXtbuQ240o9bXyj6UoZdyYDs4JJqE59yCzeLVEDC/uLtepgNgb1YlFTlyvPn0MpkCq8BnRZeiBioUXNQLIQx1LkMMqRO7YCPZigVUq9YsdfdRAUeUHvAbHVJ1hguWgxYPuAAYJ8CUK8QgCb6gp8wZqfedwF1g5D2iuYT9QG1S1ExJsRE3eKdM9SNKcFXYMDZO5r8oASfsjmGc72oDaCGO+3wRUVm3hwkwHTXhBbOAj6NQdZobGTFRgTiHEWIAhug9v/AUfUElJAII6SmXjSoBQAPfI0UwYIdTbCjXQwowEXHI7nNmEAx2R3IhTstIMFLjjEImAQJb/XBUocxqBDASDEsoBJZD1WIWitkkAXCC6k9OZQnMYAAInrmGSFEemTG0w4Kb51nAJcx8DbPNEXmcWOBRqKT247pBGckGHvxJuQSxfR1xwpX5JNiIg8VMKGUSZk3koSoIRBdgiAqgpRS2VA4RJkoxpACmp+qEE2BRbhVxEvSOHZEkk0ksdefSvQmYAx8XoZrGsT0VgZx/rQzDx5LoJZrglfmM2EMT2Zz3RjRQdAgCKKOdGlSaTTT4ANIxgBBIqG9SoQJqYV4xIlnwuL/IVKtcTJEAamVoAC5qKnQojBJnDBjnrvslUIrd/SW2p9llLArHATQmxoK5qDjkCcVBaAiiEclRV3FigggMXXgXuNJhAcVoDHHGJf8jEmsPRUTq/CwUxM7hIp81IG2EXOHXXnkDDM47PS86k3DJmiBBRpggIEFFEjAqKYYa4pNg2YVQPTQF1R9gQVWW1Ay1M4sUIHRFXxtwdcVsAyT2c4QXfTYYZP9tTM51yT10RoMPXTYdcsl0LC82PR1Bx0YfbTYGJTN6zZ8FG40218LfjQD3jgtOdOEYBO24BoUnfnRFoAbGAJGaxD22KLXPfTRZp9yXicWYJB50ZeDXcEwLuus8sDgbRdeAdGxWzAP33Wx0TjgoRe+tk14ON640YE7XnjUk2eKxu6NZ97B5plXLJgnRSvfPODN726u6ue11HrmbrcddupDGJ+53VjXjT3qevNj50CxY45BBxZ0MDvytxsc7L7WPcddjwIa8kqmJrc812lOc1qbnNOYpzjADQ8DHhhd29jykpZ0kAFjU5vuyFa4TiylEw6U3+vs5rgH6g2AdyCh/lwnvlgIpALdq1voHri5FF7AAU+jnOQaiD0XhoaBl2Nc6y7XQMVpLUQmQZkQhvY6xQmuAhf42PiEkMPmFdB1KQTj2uyHvOVdTgP+K11UbBIEADs=
// @license      MIT License
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';
  if (window.top != window.self) {
    return;
  }
  var window_url = window.location.href;
  var website_host = window.location.host;
  if (website_host == "iopscience.iop.org") {
    let doimeta = document.querySelector("meta[name='citation_doi']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("content-nav-ul wd-content-nav")[0];
    let insertdom = document.createElement("li");
    let p = document.createElement("a");
    p.append("NASA/ADS");
    p.href = "http://adsabs.harvard.edu/abs/" + doi;
    insertdom.append(p);
    insertnode.prepend(insertdom);
  } else if (website_host == "www.nature.com") {
    let doimeta = document.querySelector("meta[name='citation_doi']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("c-article-info-details")[0];
    let insertdom = document.createElement("a");
    insertdom.href = "http://adsabs.harvard.edu/abs/" + doi;
    insertdom.classList.add("c-article-info-details__cite-as");
    insertdom.textContent = "NASA/ADS";
    insertnode.append(insertdom);
  } else if (website_host == "science.sciencemag.org") {
    let doimeta = document.querySelector("meta[name='citation_doi']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("article__tools")[0];
    let insertdom = document.createElement("li");
    let p = document.createElement("div");
    let p2 = document.createElement("a");
    let ico = document.createElement("img");
    ico.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAhAAAAcgEyAAIAAAAUAAAAlIdpAAQAAAABAAAAqAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkAADIwMjA6MDY6MDkgMTU6MTk6MzEAAASQBAACAAAAFAAAAN6gAQADAAAAAQABAACgAgAEAAAAAQAAABCgAwAEAAAAAQAAABAAAAAAMjAyMDowNjowOSAxNDo1NDo0NgA/+AetAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjE3MDAwYWE4LTBhNGUtNDU1Ny05Nzc1LTE1ZTgyOGYxMGVjMDwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM3YmZhNmJkLWQ3YmEtZjE0Yi05NWZjLTE3NzUzNzUyZDc5NjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjU3NDhmZTAyLTNlZTItNGZhMy05MmQwLWQ1OGE5MDQ4NDAwOTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMC0wNi0wOVQxNDo1NDo0NiswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo1NzQ4ZmUwMi0zZWUyLTRmYTMtOTJkMC1kNThhOTA0ODQwMDk8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCAyMS4xIChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTA2LTA5VDE1OjE5OjMxKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjE3MDAwYWE4LTBhNGUtNDU1Ny05Nzc1LTE1ZTgyOGYxMGVjMDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIwLTA2LTA5VDE1OjE5OjMxKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIwLTA2LTA5VDE1OjE5OjMxKzA4OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMC0wNi0wOVQxNDo1NDo0NiswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpnGl+dAAACrUlEQVQ4EYVT30tTYRh+zs7Z3FzqnNvU6fSkG5WaWypUsyFImUhd1EVEhBDRvMsQ+iNCKigKXFDQRSJ0V8iwMLzIXCCZaM5t1Mkf07nmtM1tOrfT+cF0M6Lv4uP98TzP9/K+70fgwFFVmCxV9Z12DW1uVxTqaD4d+x1gQsz06MKs07Gx7J3KphBZTr65o/eBwdLRQxCSrPC+ybJpLE45B76OPO7jojE+kxHIt17rHy4xNLTtw/9thRZnxsZf3e3iEDGShzWe731SfsR6OUMpVWtw5VwzLrbWos1yGDUGAwLhHURjUQEiISmalEk164uzb4ki/bEm2/X7kwQhFkNX1qDfbkKeLFOcKJvcZdH3dB4+Zg5b4SWwLIsvww9PSKoaztozZB56yWYQyDPMDm7e+wx7/ySWQ7uQUgRO12kQC/sFRZ5Tbjppp7Rct8U3xPvdZBgudwIexoNYfAvG6jpISQLRaBRrfjdYpPfgqlJTO6UoKqP3IpzhZb7hxgUrerpaUFwgtAjB4C94vi8gnUpmQyFXqmkqJ8I5d66eQWudnGtaCi9GNvFx/D2s9XqYa2SgyL/HK4lvBphskWZjnuA63izh5dAgPD/9KFKKDZUc2I9EdJ2hQszUqLJYb8qIbES2kYisokKxgkq1BE31x1GtEwuVUrkVbKx5R8lEPOKvauzoSad2wCnC7Z6HsUKBcjWFUw16KPIoTP+Iw6CVCZOYmPEjzUIYo9f12i7UdtTW7dDWttzKVFGsJFGmViCWSGIpuC2EKW6MKW4AuzybOyvuT898E4OiAOfnmztvOwvLjDYh+59rc9U3Nu18tL/KHD4Z8LmGZHKV7lBJZXP2YmVr8dsX8I0PzH143s3Fcz7THk6ppS38hql0pnZ5gZrmE4nIOsM3bMXrcmwFmZzv/Ad9qPOzBNGwOAAAAABJRU5ErkJggg==";
    ico.style = "display:inline-block;vertical-align: middle;";
    p.append(ico);
    p2.href = "http://adsabs.harvard.edu/abs/" + doi;
    p2.textContent = " NASA/ADS";
    p.append(p2);
    insertdom.append(p);
    insertnode.prepend(insertdom);
  } else if (website_host == "www.annualreviews.org"){
    let doimeta = document.querySelector("meta[name='dc.Identifier']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("article-util-links")[0];
    let insertdom = document.createElement("li");
    let p = document.createElement("a");
    p.append("NASA/ADS");
    p.href = "http://adsabs.harvard.edu/abs/" + doi;
    insertdom.append(p);
    insertnode.prepend(insertdom);
  }
})();
