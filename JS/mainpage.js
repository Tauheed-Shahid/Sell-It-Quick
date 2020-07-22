const addDataBtn = document.getElementById("addBtn");

addDataBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const data = document.getElementById("item-name").value;
    const form = document.getElementById("itemForm");
    // console.log(data);
    db.collection('Test').add({
        name:data
    }).then(()=>{
        $('#itemModal').modal('hide');
        form.reset();
    });
});

db.collection('Test').onSnapshot((snapshot)=>{
    setup(snapshot.docs);
})
const setup = (data)=>{
    let html = '';
    data.forEach(doc => {
        const items = doc.data();
        let indItem = `<h2>${items.name}</h2>`;
        html+=indItem;
    });
    let container = document.getElementById('itemContainer');
    container.innerHTML = html;
}