window.addEventListener('load', ()=>{
    const user = localStorage.getItem('user');
    const userLogged = document.getElementById('userLogged');
    const toggleUserLogged = document.getElementById('toggleUserLogged');

    var logged =  `            
    <nav class="nav-menu">
    <a href="./index.html" class="logo"><img src="./assets/images/logo-site/logo2.png"></a>
    <form action="./search.html" method="GET" class="search" autocomplete="off">
        <input name="search" type="text" placeholder="Produtos, Serviços, Empresas">
        <div class="place-area">
            <input name="place" id="place" type="text" placeholder="Cidade">
            <ul class="list"></ul>
        </div>
        <button class="btn-search" type="submit">Pesquisar</button>
    </form>
    <div class="account">
        <div class="avatar-1">
            <a href="#" class="avatar-1"><img class="img_avatar"
                    src="./assets/images/site/userprofile/avatar.png"></a>
        </div>
        <div>
            <h1 class="texto" id="user_name"></h1>
            </h1>
            <a class="btn btn-light" id="logout" href="#">Sair</a>
        </div>
    </div>
</nav>
    `;
    var notLogged = ` <nav class="nav-menu">
    <a href="./index.html" class="logo"><img src="./assets/images/logo-site/logo2.png"></a>
    <form action="./search.html" method="GET" class="search" autocomplete="off">
        <input name="search" type="text" placeholder="Produtos, Serviços, Empresas">
        <div class="place-area">
            <input name="place" id="place" type="text" placeholder="Cidade">
            <ul class="list"></ul>
        </div>
        <button class="btn-search" type="submit">Pesquisar</button>
    </form>
    <div class=""><a href="./paraEmpresas.html" class="btn btn-light">Para Empresas</a></div>
    <div class="account">
        <a class="btn btn-light" href="./cadastro.html">Cadastrar-se</a>
        <a class="btn btn-light" href="./login.html">Login</a>
    </div>
</nav>`;

    
    if(user){
        if(userLogged != null && userLogged != undefined){
            var oldData = userLogged.innerHTML
            userLogged.innerHTML = oldData + logged
            
        }

        if(toggleUserLogged){            
            toggleUserLogged.innerHTML = logged
        }

    }else{
        if(toggleUserLogged){            
            toggleUserLogged.innerHTML = notLogged
        }
    }

   
})