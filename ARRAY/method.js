const animals = ["tiger", "bear", "lion", "elephant"]
console.log("Animal:", animals)

// 1. slice() : SAO CHÉP RA MỘT MẢNG MỚI TỪ MẢNG CHO SẴN
console.log("----------slice-------------")
const animalSlice = animals.slice(1, 3) // start: 1, end: 3
console.log("method slice: ", animalSlice)



// 2. splice(): XÓA HOẶC THAY THẾ PHẦN TỬ TRONG MẢNG
console.log("----------splice-------------")
const animalSplice = animals.splice(0, 2, "tran chi", 123)
console.log("method splice: ", animalSplice)
console.log("animal after using splice:", animals)



// 3.sort(): SẮP XẾP CÁC PHẦN TỬ TRNG MẢNG THEO CHUẨN UNICODE-16
console.log("----------sort-------------")
const randomNumber = [1, 999, 10, 5, 9, 9, 8, 6, 3, -5]
console.log("random number tăng dần: ", randomNumber.sort((a, b) => a - b))
console.log("random number giảm dần: ", randomNumber.sort((a, b) => b - a))
    // or console.log("random number: ", randomNumber.sort((a, b) => a > b ? 1 : -1))



// 4. find(): TÌM KIẾM VÀ TRẢ VỀ PHẦN TỬ ĐẦU TIÊN TRONG MẢNG THỎA 1 ĐIỀU KIỆN NÀO ĐÓ
console.log("----------find-------------")
const findNumber = [1, 9, 10, 5, 21, 8, 17, 15, 20, -5]
const newNumber = findNumber.find((element) => element > 10 && element < 17)
console.log("Find newNumber:", newNumber)



// 5. findIndex(): TRẢ VỀ VỊ TRÍ CỦA PHẦN TỬ NẰM TRONG MẢNG
console.log("----------findIndex-------------")
const FindNumberIndex = findNumber.findIndex((element) => element > 10 && element < 17)
console.log("FindIndex Number:", FindNumberIndex)



// 6. map(): DUYỆT QUA TỪNG PHẦN TỬ TRONG MẢNG VÀ TRẢ RA MỘT MẢNG MỚI
console.log("----------map-------------")
const list = [1, 2, 5, 8, 9, -10, 15, -2, -6]
const newList = [...list].map((element) => element * 2)
console.log("map:", newList)

// 7. forEach(): LOOP QUA TỪNG PHẦN TỬ TRONG MẢNG VÀ KHÔNG TẠO RA MẢNG MỚI
console.log("----------forEach-------------")
const lists = [1, 2, 5, 8, 8, 9, 12, 9, -10, 15, " tran chi", {
    name: "tran chi",
    age: 18
}]
const newLists = lists.forEach((index, element) => {
    console.log("index:", element, "element:", index)
})


// 8.filter(): LỌC QUA CÁC PHẦN TỬ TRONG MẢNG THỎA ĐIỀU KIỆN NÀO ĐÓ VÀ TẠO RA MẢNG MỚI
console.log("----------filter-------------")
    // using lists of forEach:
const filterList = (lists.filter((item) => item > 5 || typeof item == "string")).sort((a, b) => a - b)
console.log("filerList:", filterList)

// 9. some(): TRẢ VỀ TRUE KHI THỎA 1 ĐIỀU KIỆN NÀO ĐÓ VÀ FALSE KHI KHÔNG THỎA ĐK
console.log("----------some-------------")
    // using lists of forEach:
const someList = lists.some(item => item > 5)
console.log("someList:", someList)


// 10. every(): TRẢ VỀ TRUE NẾU TẤT CẢ ĐIỀU KIỆN PHẢI THỎA MÃN, CÒN TRẢ VỀ FALSE KHI CÓ 1 TRONG CÁI PHẦN TỬ CỦA MẢNG KO THỎA ĐK
console.log("----------every-------------")
    // using lists of forEach:
const everyList = lists.every(item => item > 5)
console.log("everyList:", everyList)


// BỔ SUNG: GỘP MẢNG SỬ DỤNG FLAT()
console.log("----------flat-------------")
const arr5 = [
    123,
    1,
    2,
    5, [5, 8, 9, [8, 5, 9, 70], 8, 9],
    10101,
    'fsdfsf',
    'asdasd',
    { name: 'tranchi' },
    [5, 6],
];
const newArr = arr5.flat(3);
console.log(newArr);


// 11. reduce(): GOM CÁC PHẦN TỬ LẠI THÀNH 1 VÀ XỬ LÝ TỪ TRÁI QUA PHẢI
console.log("----------reduce-------------")
const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((a, b) => {
    console.log("a:", a, "b:", b)
    return a + b;
}, 10); //10: giá trị khởi tạo => giá trị của a ban đầu = 10
console.log(sum); // 21

console.log("----------BÀI TẬP reduce-------------")
    // LÀM PHẲNG MẢNG BẰNG reduce
const DepthArray = [1, 2, [3, 4], 5, [6, 7], 8, [9, 10]]
const flatArray = DepthArray.reduce((flatOutput, depItem) =>
    flatOutput.concat(depItem), [])
console.log("flatArray:", flatArray)

// LẤY RA MỘT KHÓA HỌC 
const topics = [{
        topic: "frond-end",
        courses: [{
                id: 1,
                title: "HTML,CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [{
                id: 3,
                title: "PHP"
            },
            {
                id: 4,
                title: "RUBY"
            }
        ]
    }

]

const newCourse = topics.reduce(function(course, topicItem) {
    return course.concat(topicItem.courses)
}, [])

console.log(newCourse)






// ----------------------------------------------------------------
const watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];



function calculateRating(watchList) {
    const findWriter = watchList.filter(name => name.Director === "Christopher Nolan")
    const Sum = findWriter.reduce((imdb, imdbItem) => imdb + Number(imdbItem.imdbRating), 0)
    return Sum / findWriter.length

}
console.log("Calculate:", calculateRating(watchList));


// --------------------------------
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];



function arrToObj(arr) {
    return arr.reduce(function(acc, item) {
        acc[item[0]] = item[1];
        return acc
    }, {})
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }


// ----------------------------------------------------------------
const arr1 = [59, 77, 88, 52, 114, 85, 20, 45];
console.log(arr1)

const max = Math.max(...arr1)
console.log(max)

const Max = () => arr1.reduce((t, v) => t > v ? t : v)
const Min = () => arr1.reduce((t, v) => t < v ? t : v)

console.log("max:", Max(arr)); //  114
console.log("min:", Min(arr));