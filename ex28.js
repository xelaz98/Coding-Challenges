// 28. Write a JavaScript program to pass a 'JavaScript function' as a parameter.

function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);
                   