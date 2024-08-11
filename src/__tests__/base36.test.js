import { encode, decode } from "../base36";

const TEST_INPUT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies nulla mi, sed gravida lorem maximus in. Nulla faucibus aliquet nisi, a posuere nulla tristique id. Fusce fringilla lectus lorem, tincidunt cursus odio pretium eu. Ut eu lacus tristique mi convallis tempus in at ante. Maecenas semper ligula in nibh tempor eleifend. Praesent commodo est non enim rhoncus, ut hendrerit tortor sollicitudin. Vivamus eu elementum lectus. Mauris dapibus quam at magna sagittis lacinia. Cras ultrices ante a rutrum tempor. Curabitur vitae magna porta urna dapibus bibendum. In hac habitasse platea dictumst. Donec euismod vehicula sapien non lacinia. Suspendisse ac eros accumsan, sollicitudin orci quis, tempus lorem. In egestas tempor dui, at aliquet dolor porta vitae. Suspendisse potenti. Donec eget euismod mauris.";
const TEST_OUTPUT = "2p4jrp2q71mh47ajzddkdlxb8nfdhf62lg2d4znhhwybpmr4bgg3adqk6c1tpid3e3gkusye8uo45hq5nu099lzyhhb1q0nivsqxmsw272aqc8ethxqgxygbbyoliap55rva87g8t7jv1d12zl38nv0sco8voa9j31ppn5n60d47q39slgk19qz8atqnejxx6aytycdgw889vaqttryvf3p826eehsfah3ey6m2lnwuk3tp8rq8mdb0hfqlu6xexl0jvnvtyon77wifw0ptctzj6icmqzbtnhavdffrjbg0u76m8ys01e37m5548arnswbiz20rw8pqq6iswpmt1igdp93p9vx79ocil2htuh9laudjkfe9uhuk9jg3hprxbivmm9irc6iqbdk4wbvc303fmzgnek9sk93p47ds10414xiyzn49kh7toqjxmht645ffyhuwnyohqpsxei73p3cms32tboql7t3bf4m1g8rvjy0e5w8p3fpaaz4jjk9sbie75dg4humd6xstf7tb6a61ut3xpek0k97gqamlwn8c15izcdetzrqjiwb5y9mlaftiryvqvlbauunk2309vq2jd5qqahy1njvbuayd67cyv2irj90tbp5kl50rck6rq1rgv387u1mbw1kupsgcqesj7b59e91n04hjla6ra1n64hsk8m3mnlpz8xh1vih2sywun4kmvqocb1omy4gfph7g2wl4mi42px8b6z5k53vgkhla0lk64o57g1cfmjqv38nxyj5hi2s5agtz37au7hhy9l4tls714xq7q2e82binitt9wqolpusx9hfetbxrn3m98aihv3akn4vyn8fzilom5yjs5eyidxeori3jnhxobed1h7a1dpbv6916ukvvufuk1q62hpadfu18bv8ro23fkppyjy312hf8g1oevsa1od9l1ru5lk1vy2apcsgx0ol96lg0v6ulfjjjs2k1f23fpf6r6uspx4zoqs6fbcpw53j7l15bdb5hprdmep6gjeok52ne06f0pvz1jkaeyi1819lufbt5anw819tnvasu161vy5cisex9nhmqzxpuzvhi1n50uvssmfw5di1z2hos37geetroqq4798nwiqbi9uk3c8zjwsad94yp3reuj6xvgy2ik0fz18d2hz8ab5v7g8urnqgsnrenuuzhzo3e56ognq1g10ln4tfddq8arlob3z2vzvn40ahau2mx29rflr3kwtcq69a47fd2fzbbzrxe1f41rrrjtzjk1a";

describe("base36", () => {
  test("encode", () => {
    expect(encode(TEST_INPUT)).toMatch(TEST_OUTPUT);
  });
  test("decode", () => {
    expect(decode(TEST_OUTPUT)).toMatch(TEST_INPUT);
  });
});
