interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    nickname: string;
    tipo: number;
    token?: string | null;
}

export default UserLogin;