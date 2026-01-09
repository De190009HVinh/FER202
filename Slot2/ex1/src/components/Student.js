//Khai báo 1 đối tượng student gồm name, age, avatar, grade


//In thông tin của h1, p và img
function About() {
    const student = {id: 1, name: 'Alice', age: 20, avatar: 'image.png', grade: 'A'};
    console.log(student);
    return (
        <>
            <h1>Student Information</h1>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Avatar: <img src={student.avatar} alt="Student Avatar" /></p>
        </>
    );
}

export default About;