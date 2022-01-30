app.use(express.static('public'));


app.listen(3030, ()=>{console.log("Servidor funcionando on p3030");
});

app.get(;'/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
