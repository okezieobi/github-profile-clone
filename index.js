window.addEventListener('load', () => {    
    const input = document.querySelector('[header-input]');
    const ul = document.querySelector('[header-input-list]');
    const li = document.querySelector('[header-input-item]');
    const mainDropdown = document.querySelector('[drop-list]');
    const headerMenu = document.querySelector('[header-menu-icon]');
    const smallScreenUser = document.querySelector('#user-small-screen');
    const avatars = document.querySelectorAll('img');
    const largeScreenAvatar = document.querySelector('[user-avatar-large]');
    const largeScreenRepoList = document.querySelector('[repo-large-screen]');
    const dropdownContentUser = document.querySelector('.dropdown-content-user');
    const dropdownContentRepo = document.querySelector('.dropdown-content-repo');
    const body = document.querySelector('html')

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

    largeScreenAvatar.addEventListener('click', () => {
        if (dropdownContentUser.classList.contains('hide-element')) {
            dropdownContentUser.classList.remove('hide-element');
            dropdownContentRepo.classList.add('hide-element')
        } else dropdownContentUser.classList.add('hide-element')
    });

    largeScreenRepoList.addEventListener('click', () => {
        if (dropdownContentRepo.classList.contains('hide-element')) {
            dropdownContentRepo.classList.remove('hide-element');
            dropdownContentUser.classList.add('hide-element')
        } else dropdownContentRepo.classList.add('hide-element');
    });

    body.addEventListener('click', ({ target}) => {
        if (!target.closest('[user-avatar-large]')) dropdownContentUser.classList.add('hide-element');
    });

     body.addEventListener('click', ({ target}) => {
        if (!target.closest('[repo-large-screen]')) dropdownContentRepo.classList.add('hide-element');
    });

    const graphqlURL = 'https://api.github.com/graphql';
    const personalToken = '277b651938755812ad86f1426c26dd3c5b7b9693';
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