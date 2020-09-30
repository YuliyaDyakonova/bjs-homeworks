function getSolutions( a, b, c ){
    let discriminant = new Object();
    discriminant.d = Math.pow(b, 2) - (4 * a * c);
    discriminant.roots = [];
    if (discriminant.d) < 0 {
        return discriminant;
    } else if (discriminant.d === 0){
        let x1 = [];
        x1[0] = -b / (2 * a);
        discriminant.roots = x1;
        return discriminant;
    } else if (discriminant.d > 0) {
        let x = [];
        x[0] = (-b + Math.sqrt(discriminant.d)) / (2 * a);
        x[1] = (-b - Math.sqrt(discriminant.d)) / (2 * a);
        discriminant.roots = x;
        return discriminant;
    }
};

 function showSolutionsMessage( a, b, c ){
     let result = new Object(); 
     result = showSolutionsMessage( a, b, c );
     console.log ("Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}");
     console.log ("Значение дискриминанта: ${result.d}");
     if (result.d < 0){
         console.log("Уравнение не имеет вещественных корней");
     } else if (result.d === 0){
         console.log("Уравнение имеет один корень X₁ = ${result.roots}");
     } else if (result.d > 0){
         console.log ("Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]");
     }
 };
 showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

function getAverageScore(...data){
    let arrMarks = [];
    let result = {};
    for (let subject in data) {
        result[subject] = getAverageMark(data[subject]);
        arrMarks.push(result[subject]);
    }
    result.average = getAverageMark(arrMarks);
    return result;
};

function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    psysics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
});

function getPersonData(secretData) {
    let Object = {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.ddd),
    }
    return object;
}
}

function getDecodedValue(secretData) {
    let obj = new Object;
    if(secretData === 0) {
        return 'Родриго';
    }
    if(secretData === 1) {
        return 'Эмильо';
    }
};

getPersonData({aaa: 0, bbb: 0});
getPersonData({aaa: 1, bbb: 0});
getPersonData({aaa: 0, bbb: 1});
getPersonData({aaa: 1, bbb: 1});
