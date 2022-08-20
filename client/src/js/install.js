//don't like this naming format, it doesn't sound like a button; changing it to my usual way of event listener button
const installButton = document.getElementById('buttonInstall');
//here we need to add some logic for the event handlers

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
    //this ensures that our events are there when triggered
    window.deferredPrompt = e;

    //this removes the hidden css clas from the install button so that it shows once the events are triggered
    installButton.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `installButton` element
installButton.addEventListener('click', async () => {
    console.log('Click registered')
    const eventStart = window.deferredPrompt;
    if (!eventStart) {
        return;
    }

    eventStart.prompt();

    window.deferredPrompt = null;

    installButton.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
