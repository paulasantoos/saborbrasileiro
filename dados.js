let dados = [
  {
    titulo: "Tacacá",
    descricao: "Sopa ácida e quente feita com tucupi, camarão seco, jambu e goma de mandioca.",
    link: "https://www.youtube.com/watch?v=tvKWA3SFcGU",
    tags: "camarao, mandioka, tacaca"
},
{
    titulo: "Pato no Tucupi",
    descricao: "Prato típico paraense com pato cozido no tucupi, acompanhado de jambu e farinha de mandioca.",
    link: "https://www.youtube.com/watch?v=AUe-HDcxDcw",
    tags: "mandioka"
},
{
    titulo: "Caldeirada de Peixe",
    descricao: "Sopa de peixe com diversos temperos, legumes e especiarias, muito popular na região.",
    link: "https://www.youtube.com/watch?v=asUDh5vDDHM",
    tags: "peixe branco, camarão, lula, pimentão, tomate, coentro, açafrão,caldeirada, peixe, sopa"
},
{
  titulo: "Feijoada Completa",
  descricao: "Prato tradicional brasileiro à base de feijão preto, diversas carnes e acompanhamentos.",
  link: "https://www.youtube.com/watch?v=-RzTNlq5Qxc",
  tags: "couve, laranja, farofa, feijao"
},
{
  titulo: "Virado à Paulista",
  descricao: "Prato típico paulista com arroz, feijão, couve refogada, ovo frito e outros acompanhamentos.",
  link: "https://www.youtube.com/watch?v=BicYFQIkTrw",
  tags: "feijao, tipico"
},
{
  titulo: "Bobó de Camarão",
  descricao: "Prato baiano à base de camarão, leite de coco, azeite de dendê e acompanhamentos como pirão.",
  link: "https://www.youtube.com/watch?v=UITsK_S3I_Y",
  tags: "bobo, camarao, pirao, bahia"
},
{
  titulo: "Feijão Tropeiro",
  descricao: "Prato típico mineiro com feijão cozido, torresmo, linguiça, couve, ovo e outros acompanhamentos.",
  link: "https://www.youtube.com/watch?v=xzoQAnqVFg0",
  tags: "feijao, torremo, linguica, minas"
},
{
  titulo: "Tutu de Feijão",
  descricao: "Purê de feijão cozido com outros ingredientes como torresmo, couve e farinha de mandioca.",
  link: "https://www.youtube.com/watch?v=xHsnvWXOc9o",
  tags: "feijao, pure, mandioka"
},
{
  titulo: "Frango com Quiabo",
  descricao: "Clássico da culinária mineira, feito com frango caipira e quiabo cozidos em um molho saboroso.",
  link: "https://www.youtube.com/watch?v=YTuzky9b5vE",
  tags: "kiabo, angu, limao, galinha"
},
{
  titulo: "Pão de Queijo",
  descricao: "Delicioso salgado feito com queijo minas, polvilho doce e outros ingredientes.",
  link: "https://www.youtube.com/watch?v=noDZZXzImv8",
  tags: "pao, parmesao, minas, cafe"
},
{
  titulo: "Vaca Atolada",
  descricao: "Comida típico mineiro feito com carne bovina cozida.",
  link: "https://www.youtube.com/watch?v=bBvGlJJpE_E",
  tags: "mandioca, mandioka, musculo"
},
{
  titulo: "Leitão à Pururuca",
  descricao: "Prato especial para ocasiões especiais, com leitão assado até a pele ficar crocante.",
  link: "https://www.youtube.com/watch?v=PtJlXdsQAlc",
  tags: "leitao, porco, forno"
},
{
  titulo: "Frango com Ora-pro-nobis",
  descricao: "Prato nutritivo e saboroso, feito com frango e a planta comestível ora-pro-nobis.",
  link: "https://www.youtube.com/watch?v=yxWNGcNwM_s",
  tags: "comestivel, planta, orapronobis"
},
{
  titulo: "Romeu e Julieta",
  descricao: "Doce feito com queijo minas e goiabada, um clássico da culinária mineira.",
  link: "https://www.youtube.com/watch?v=97YHqMJRRP8",
  tags: "queijo, goiabada, sobremesa"
},
{
  titulo: "Broa de Milho",
  descricao: "Pão de milho típico mineiro, feito com fubá e outros ingredientes.",
  link: "https://www.youtube.com/watch?v=a1GahnhtOLE",
  tags: "fubá, cafe, café"
},
{
  titulo: "Baião de Dois",
  descricao: "Prato nordestino feito com arroz, feijão, queijo coalho e outros ingredientes.",
  link: "https://www.youtube.com/watch?v=GeX2ZFNqMZw",
  tags: "feijao, norteste"
},
{
  titulo: "Arroz Carreteiro",
  descricao: "Prato gaúcho com arroz, carne seca desfiada, linguiça e outros acompanhamentos.",
  link: "https://www.youtube.com/watch?v=gE73u2B1C4Q",
  tags: "linguica, gaucho"
},
{
  titulo: "Acarajé",
  descricao: "Bolinho de feijão fradinho frito em azeite de dendê, típico da Bahia.",
  link: "https://www.youtube.com/watch?v=fzJLODhiOz0",
  tags: "acaraje, feijao, dende, bahia"
},
{
  titulo: "Pastel de Feira",
  descricao: "Salgado frito com recheios variados, como carne, queijo e palmito.",
  link: "https://www.youtube.com/watch?v=YH5mceVPD40",
  tags: "praça, batata"
},
{
  titulo: "Bauru de Forno",
  descricao: "Sanduíche de forno",
  link: "https://www.youtube.com/watch?v=puO6wh3xgSU",
  tags: "presunto, queijo, assado"
},
{
  titulo: "Coxinha",
  descricao: "Salgado frito com massa de batata e recheio de frango.",
  link: "https://www.youtube.com/watch?v=pyslNp5YCj8",
  tags: "azeitona, catupiry, queijo"
},
{
  titulo: "Arroz Biro-Biro",
  descricao: "Arroz soltinho com temperos e legumes, popular em feiras e eventos.",
  link: "https://www.youtube.com/watch?v=adbNyEaMHuw",
  tags: "birobiro, paulista"
},
{
  titulo: "Cuscuz Paulista",
  descricao: "Cuscuz feito com milho, frango desfiado, legumes e temperos.",
  link: "https://www.youtube.com/watch?v=q3E7x4ykZv8",
  tags: "cuscus"
},
{
  titulo: "Bolovo",
  descricao: "Bolinho de carne recheado com ovo cozido.",
  link: "https://www.youtube.com/watch?v=1Rb3ubfKQac",
  tags: "carnes, fritura"
},
{
  titulo: "Picadinho de Carne",
  descricao: "Carne bovina picada refogada com cebola, alho e outros temperos.",
  link: "https://www.youtube.com/watch?v=NssigoUGFVg",
  tags: "assadado, musculo, legumes"
},
{
  titulo: "Polpetone",
  descricao: "Rolinho de carne moída recheado com queijo e temperos.",
  link: "https://www.youtube.com/watch?v=MXchjEsk3As",
  tags: "moida"
},
{
  titulo: "Sanduíche de Mortadela",
  descricao: "Sanduíche clássico com pão francês, mortadela, queijo e outros acompanhamentos.",
  link: "https://www.youtube.com/watch?v=hAdX2_YJktg",
  tags: "sanduiche, pao"
},
{
  titulo: "Churrasco",
  descricao: "Prato tradicional gaúcho, preparado com diversos tipos de carnes assadas na brasa.",
  link: "https://www.youtube.com/watch?v=ayhScyPgUAU",
  tags: "alcatra, alho, churrasqueira"
},
{
  titulo: "Barreado",
  descricao: "Prato paranaense cozido em panela de barro por longas horas, com carne bovina, especiarias e acompanhamentos.",
  link: "https://www.youtube.com/watch?v=husypC6c7XU",
  tags: "musculo, alcatra, cozinhar"
},
{
  titulo: "Matambre Recheado",
  descricao: "Corte de carne bovina recheado com diversos ingredientes, como carne picada, azeitonas e especiarias.",
  link: "https://www.youtube.com/watch?v=K3B2Pe2B4Xc",
  tags: "recheio"
},
{
  titulo: "Paçoca de Pinhão",
  descricao: "Comida típico feito com pinhão moído, açúcar e especiarias.",
  link: "https://www.youtube.com/watch?v=K2zAN3EJQrs",
  tags: "pinhao, pinho, açucar"
},
{
  titulo: "Cuca",
  descricao: "Bolo típico da região Sul, com diversas variações de recheio, como banana, goiabada e chocolate.",
  link: "https://www.youtube.com/watch?v=ybNgmteAaW8",
  tags: "cafe"
},
{
  titulo: "Salame",
  descricao: "Charque defumado e temperado, típico da região, especialmente do Rio Grande do Sul.",
  link: "https://www.youtube.com/watch?v=3e9Ltlu5gb0",
  tags: "salaminho"
},
{
  titulo: "Vovó Sentada",
  descricao: "Bolo de fubá com recheio de linguiça, muito popular em Santa Catarina.",
  link: "https://www.youtube.com/watch?v=i0MxUuCsd0M",
  tags: "vovo, fuba"
},
{
  titulo: "Capeletti",
  descricao: "Pasticcio italiano adaptado à culinária brasileira, com recheio de carne ou ricota.",
  link: "https://www.youtube.com/watch?v=ANpt2xOLMmE",
  tags: "capeleti, macarrao"
},
{
  titulo: "Xis",
  descricao: "Sanduíche originário do Rio Grande do Sul, com pão de forma, carne, queijo e acompanhamentos variados.",
  link: "https://www.youtube.com/watch?v=yGLFouChD3I",
  tags: "sanduiche"
}, 
{
  titulo: "Rabada",
  descricao: "Sopa com rabo de boi, legumes e especiarias, muito popular nos dias frios.",
  link: "https://www.youtube.com/watch?v=7eOklTK-2mo",
  tags: "sopa, carne"
},
{
  titulo: "Caldo Verde",
  descricao: "Sopa com couve portuguesa, linguiça e batata, típica dos dias frios.",
  link: "https://www.youtube.com/watch?v=97JwzGYhKHo",
  tags: "caldos, noite"
},
{
  titulo: "Biscoito Globo",
  descricao: "Lanche tradicional carioca, composto por biscoito Globo.",
  link: "https://www.youtube.com/watch?v=erN1l3qiHP8",
  tags: "polvilho"
},
{
  titulo: "Frango Assado de Padaria",
  descricao: "Frango assado com temperos simples, mas com um sabor especial das padarias cariocas.",
  link: "https://www.youtube.com/watch?v=scf_jGYKuKA",
  tags: "assado, frango, recheado"
},
{
  titulo: "Moqueca Capixaba",
  descricao: "Peixe cozido em leite de coco, azeite de dendê e temperos, muito popular no Rio de Janeiro.",
  link: "https://www.youtube.com/watch?v=LO9s4UIFTrA",
  tags: "moqueka, dende"
},
{
  titulo: "Sarapatel",
  descricao: "Prato com bucho de porco, miúdos e especiarias, servido com farinha de mandioca.",
  link: "https://www.youtube.com/watch?v=su52sEVKFf8",
  tags: "miudo, miudos, mandioka"
}
  ];


    