function getStudents() {
    var students = [];

    function Student(fname, lname, age, marks) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.marks = marks;
        this.fullName = getFullName(fname, lname);
    }

    function getFullName(fname, lname) {
        return fname + ' ' + lname;
    }

    var maria1 = new Student('Maria', 'Todorova', 25, 10);
    var gosho = new Student('Georgi', 'Milev', 21, 27);
    var ana1 = new Student('Ana', 'Angelova', 23, 22);
    var ana2 = new Student('Ana', 'Stoyanova', 20, 20);
    var ana3 = new Student('Ana', 'Racheva', 46, 18);
    var mitko1 = new Student('Dimitur', 'Aleksandrov', 22, 18);
    var mitko2 = new Student('Dimitur', 'Qsenov', 18, 17);
    var diana = new Student('Diana', 'Kostadinova', 23, 19);
    var koceto1 = new Student('Konstantin', 'Dimitrov', 25, 24);
    var koceto2 = new Student('Konstantin', 'Kamenov', 26, 23);
    var ivo = new Student('Ivailo', 'Dimitrov', 16, 23);
    var pesho1 = new Student('Petur', 'Gospodinov', 22, 25);
    var pesho2 = new Student('Petur', 'Rumenov', 26, 23);
    var maria2 = new Student('Maria', 'Filipova', 14, 16);

    students.push(maria1, gosho, ana1, ana2, ana3, mitko1, mitko2, diana, koceto1, koceto2, ivo, pesho1, pesho2, maria2);

    return students;
}