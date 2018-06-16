import { natural } from "../basics";

export default () => {
    // Todo: This could return some reserved IPs. See http://vq.io/137dgYy
    // this should probably be updated to account for that rare as it may be
    const first = natural({min: 1, max: 254});
    const second = natural({max: 255});
    const third = natural({max: 255});
    const fourth = natural({min: 1, max: 254});

    return `${first}.${second}.${third}.${fourth}`;
}