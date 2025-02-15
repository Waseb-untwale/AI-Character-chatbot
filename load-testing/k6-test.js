// import http from "k6/http";
// import { check, sleep } from "k6";

// export let options = {
//     vus: 1000,  // Simulating 1000 users
//     duration: "30s", // Run for 30 seconds
// };

// export default function () {
//     let res = http.get("http://localhost:5000/chat?character=IronMan&message=Hello");
//     check(res, { "status was 200": (r) => r.status === 200 });
//     sleep(1);
// }
