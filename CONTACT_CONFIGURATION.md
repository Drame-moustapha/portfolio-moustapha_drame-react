## Configuration du formulaire de contact (facultatif)

Le formulaire peut envoyer directement les messages avec EmailJS. Créez un service et un modèle EmailJS, puis définissez ces variables d'environnement avant le build :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_cle_publique
```

Le modèle EmailJS doit accepter `from_name`, `from_email`, `reply_to` et `message`. Sans ces variables (ou si EmailJS est indisponible), le formulaire prépare un courriel adressé à `drame779576559@gmail.com` dans l'application de messagerie du visiteur. Aucun identifiant privé n'est nécessaire dans le dépôt.
