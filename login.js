        document.addEventListener('DOMContentLoaded', function() {
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            
            emailInput.addEventListener('focus', function() {
                this.placeholder = '';
            });
            
            emailInput.addEventListener('blur', function() {
                if (!this.value) this.placeholder = 'E-mail Address';
            });
            
            passwordInput.addEventListener('focus', function() {
                this.placeholder = '';
            });
            
            passwordInput.addEventListener('blur', function() {
                if (!this.value) this.placeholder = '••••••••';
            });
        });