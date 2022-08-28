// const git = require('simple-git')()
import { simpleGit } from 'simple-git';
import fs from 'node:fs/promises';


const repoURL = 'https://github.com/steveukx/git-js.git';
// const repoURL = 'git@github.com:ngmaibulat/nextjs.git';

const sshKey = '~/.ssh/id_rsa';
const GIT_SSH_COMMAND = `ssh -o StrictHostKeyChecking=no -i ${sshKey}`;

const localPath= '../tmp';

const git = simpleGit().env('GIT_SSH_COMMAND', GIT_SSH_COMMAND);

await fs.rm(localPath, { recursive: true, force: true });

await git.clone(repoURL, localPath)
        .then( () => console.log(`cloned to: ${localPath}`) );
