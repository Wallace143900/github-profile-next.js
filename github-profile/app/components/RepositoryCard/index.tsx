import { GithubReposType } from "@/app/types/GithubReposType";
import styles from "./styles.module.scss";

interface IProps {
    repo: GithubReposType
}

export default function RepositoryCard({ repo }: IProps) {
    return(
        <div className={styles.container}>
            <a href={repo.html_url} target="_blank">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
            </a>
        </div>
    )
}