document.addEventListener('DOMContentLoaded', function() {
    const notifications = document.querySelectorAll('.list-group-item');

    notifications.forEach(notification => {
        notification.addEventListener('click', function() {
            alert('Redireccionando al detalle de la notificación...');
        });
    });
});
