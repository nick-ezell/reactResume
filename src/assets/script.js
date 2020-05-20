$(document).ready(function () {
  let skills = $("#dropdown1");
  let education = $("#dropdown2");
  let projects = $("#dropdown3");
  let dropdownImg1 = $("<img>").attr("src", "../images/dropdown.png");
  let dropdownImg2 = $("<img>").attr("src", "../images/dropdown.png");
  let dropdownImg3 = $("<img>").attr("src", "../images/dropdown.png");
  let list1 = $(".hide1");
  list1.toggleClass("hideList");
  let list2 = $(".hide2");
  list2.toggleClass("hideList");
  let list2 = $(".hide2");
  list2.toggleClass("hideList");
  dropdownImg1.attr("class", "dropdown");
  dropdownImg1.toggleClass("showArrow");
  dropdownImg2.attr("class", "dropdown");
  dropdownImg2.toggleClass("showArrow");
  dropdownImg3.attr("class", "dropdown");
  dropdownImg3.toggleClass("showArrow");
  skills.prepend(dropdownImg1);
  education.prepend(dropdownImg2);
  projects.prepend(dropdownImg3);

  skills.on("click", function () {
    if (".showArrow") {
      dropdownImg1.toggleClass("showArrow");
      dropdownImg1.toggleClass("hideArrow");
      list1.toggleClass("showList");
      list1.toggleClass("hideList");
    } else {
      dropdownImg1.toggleClass("hideArrow");
      dropdownImg1.toggleClass("showArrow");
      list1.toggleClass("hideList");
      list1.toggleClass("showList");
    }
  });

  education.on("click", function () {
    if (".showArrow") {
      dropdownImg2.toggleClass("showArrow");
      dropdownImg2.toggleClass("hideArrow");
      list2.toggleClass("showList");
      list2.toggleClass("hideList");
    } else {
      dropdownImg2.toggleClass("hideArrow");
      dropdownImg2.toggleClass("showArrow");
      list2.toggleClass("hideList");
      list2.toggleClass("showList");
    }
  });
});
