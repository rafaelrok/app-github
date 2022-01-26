import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import CardLoader from './CardLoader';

type FormData = {
    username: string;
};

type Profile = {
    html_url: string;
    followers: string;
    name: string;
    location: string;
    avatar_url: string;
};

const GithubSearch = () => {
    const [profile, setProfile] = useState<Profile>();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        username: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        axios
            .get(`https://api.github.com/users/${formData.username}`)
            .then((response) => {
                setProfile(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                setProfile(undefined);
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="git-search-container">
            <div className="container search-container">
                <h1>Encontre um perfil Github</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            className="search-input"
                            placeholder="Usuário Github"
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-primary search-button">
                            Encontrar
                        </button>
                    </div>
                </form>
            </div>
            <div className="container result-container">
                {isLoading ? <CardLoader /> :
                    <form className="container info-container">
                        {profile && (
                            <>
                                <div><img className="img-container" src={profile.avatar_url} alt={profile.name} /></div>
                                <div className="txt-container">
                                    <h6>Informações</h6>

                                    <ResultCard title="Perfil:" description={profile.html_url} />
                                    <ResultCard title="Seguidores:" description={profile.followers} />
                                    <ResultCard title="Localidade:" description={profile.location} />
                                    <ResultCard title="Nome:" description={profile.name} />
                                </div>
                            </>
                        )}
                    </form>}
            </div>
        </div>
    );
};

export default GithubSearch;