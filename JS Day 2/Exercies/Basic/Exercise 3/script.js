function crystalGazer(partner, children, place, job) {
  return `You will be a ${job} on ${place}, and married to ${partner}
    with ${children} kids.`;
}
let gazer = crystalGazer("unknown", 99, "Earth", "making money");
console.log(gazer);
