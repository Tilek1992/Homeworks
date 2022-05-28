class building {
  constructor(name, length, width, height, color, gym, tenants, form, rooms){
    this.name = name;
    this.length = length;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gym = gym;
    this.tenants = tenants;
    this.form = form;
    this.rooms = rooms;
  }
}

class school extends building {
  constructor(name, length, width, height, color, gym, tenants, form, rooms, classRooms, teachersRooms, students, teachers, primaryStuds, secondaryStuds) {
    super(classRooms, teachersRooms, students, teachers, primaryStuds, secondaryStuds);
    this.classRooms = classRooms;
    this.teachersRooms = teachersRooms;
    this.students = students;
    this.teachers = teachers;
    this.primaryStuds = primaryStuds;
    this.secondaryStuds = secondaryStuds;
  }
}

const thirdSchool = new school(
  "Third School",
  "350",
  "250",
  "15",
  "Orange",
  "3",
  "1050",
  "Square",
  "40",
  "34",
  "4",
  "1000",
  "50",
  "600",
  "400"
)
console.log(thirdSchool);

class house extends building {
  constructor(name, length, width, height, color, gym, tenants, form, rooms, parents, children) {
    super(parents, children);
    this.parents = parents;
    this.children = children;
  }
}

const ownHome = new house(
  "Own Home",
  "15",
  "25",
  "6",
  "Blue",
  "1",
  "10",
  "Square",
  "10",
  "4",
  "6"
)
console.log(ownHome);
