export async function firstApiRequestOfProjects() {
    const blendmart = () => fetch("https://blendmart-backend.onrender.com");
    const quizzard = () => fetch("https://quizzard-backend.onrender.com");
    const blendchat = () => fetch("https://chatapp-backend-jcmf.onrender.com");
    const blendmedia = () => fetch("https://social-media-backend-2l51.onrender.com");
    await Promise.all([blendmart(), quizzard(), blendchat(), blendmedia()]);
}