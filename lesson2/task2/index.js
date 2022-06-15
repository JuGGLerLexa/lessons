import { printProfile } from './src/profile'

const userData = {
    name: 'Tom',
    age: 17,
};

const profile = {
    ...userData,
    company: 'Gromcode',
}

printProfile(profile)