window.addEventListener('load', () => {    
    const input = document.querySelector('[header-input]');
    const ul = document.querySelector('[header-input-list]');
    const li = document.querySelector('[header-input-item]');
    const mainDropdown = document.querySelector('[drop-list]');
    const headerMenu = document.querySelector('[header-menu-icon]');
    const smallScreenUser = document.querySelector('#user-small-screen');
    const avatars = document.querySelectorAll('img');

    input.addEventListener('focus', () => {
        input.classList.add('input-grow')
        ul.classList.add('input-grow');
        li.classList.add('input-grow');
    });

    input.addEventListener('focusout', () => {
        input.classList.remove('input-grow')
        ul.classList.remove('input-grow');
        li.classList.remove('input-grow');
    });
    
    headerMenu.addEventListener('click', () => {
        if (mainDropdown.classList.contains('hide-element')) mainDropdown.classList.remove('hide-element');
        else mainDropdown.classList.add('hide-element');
    })

    const graphqlURL = 'https://api.github.com/graphql';
    const personalToken = 'ff410e332fd1fa99169f2e1c186f9c21aec75d74';
    const query = `
            {
                viewer { 
                    login
                   avatarUrl(size: 20) 
                    }
            }
            `;
    fetch(graphqlURL, {
        headers: {
            Authorization: `Bearer ${personalToken}`
        },
        method: 'POST',
        Accept: 'api_version=2',
        'Content-Type': 'application/graphql',
        body: JSON.stringify({ query })
    }).then((res) => res.json())
        .then((data) => {
            smallScreenUser.innerHTML = data.data.viewer.login;
            avatars.forEach((element) => element.src = data.data.viewer.avatarUrl);
        })
        .catch((err) => console.error(err));
});