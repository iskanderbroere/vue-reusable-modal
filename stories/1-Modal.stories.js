import { Modal } from "../src/index.ts";
import { action } from "@storybook/addon-actions";

export default {
  title: "Modal"
};

export const modalOverlay = () => ({
  components: { Modal },
  methods: {
    open() {
      action("Modal opened");
      this.showDialog = true;
    },
    close() {
      action("Modal dismissed");
      this.showDialog = false;
    }
  },
  data() {
    return {
      showDialog: false
    };
  },
  render(h) {
    return (
      <div>
        <button id="model-show-button" onClick={this.open}>
          Show Dialog
        </button>
        <p>
          Ad nisi aliquip tempor ut magna est consequat non consectetur. Elit in
          elit cillum veniam. Id excepteur et quis eiusmod in incididunt veniam
          aliqua minim esse tempor aliqua minim dolor. Ad pariatur veniam enim
          proident tempor eu fugiat est elit officia quis tempor. Et tempor
          cillum commodo proident fugiat sunt sint minim mollit do non laborum.
          In sint eiusmod labore occaecat fugiat anim est. Laboris commodo sint
          proident aliqua in id eu incididunt veniam officia duis. Ad excepteur
          amet ipsum ex excepteur aliquip officia ad ipsum ad elit laboris. Ex
          enim veniam enim exercitation sit aliquip occaecat nostrud non velit
          occaecat proident deserunt tempor. Labore consectetur ad deserunt
          cillum minim sunt. Non qui consequat ex ex non est adipisicing laborum
          labore Lorem eu. Voluptate id fugiat deserunt eiusmod est sunt veniam.
          Excepteur cillum et voluptate esse quis incididunt. Non esse veniam
          consequat nulla aliquip deserunt. Tempor ad magna sunt duis dolor
          aliquip aliquip pariatur do sint enim. Proident mollit nulla officia
          ipsum adipisicing aliquip ut voluptate aliquip irure. Reprehenderit
          veniam nostrud aliquip amet laborum enim incididunt et esse excepteur
          ad est ullamco. Irure qui laborum ipsum laboris nisi irure est. Aute
          reprehenderit culpa esse tempor commodo enim ullamco ipsum pariatur
          reprehenderit adipisicing. Cillum cillum cillum exercitation nisi ut
          ipsum exercitation adipisicing incididunt qui laborum dolore do. Anim
          cillum in do ullamco Lorem consectetur dolor in deserunt nulla mollit.
          Nulla culpa do elit labore aliquip excepteur ex et. Sunt incididunt
          fugiat adipisicing eu exercitation aliquip magna ut tempor est. Minim
          qui consequat voluptate ut tempor est aute. Eiusmod adipisicing Lorem
          sunt culpa. Nisi adipisicing ipsum exercitation nisi Lorem. Ad dolor
          deserunt labore quis ad. Laborum ea commodo sint proident incididunt
          deserunt. Amet tempor adipisicing pariatur do eiusmod duis tempor
          laborum ullamco pariatur occaecat voluptate quis. Officia exercitation
          et esse in quis laborum ut nulla excepteur irure et non deserunt.
          Laboris eu irure sunt irure aliquip proident nisi fugiat deserunt
          cillum occaecat fugiat occaecat laborum. Veniam cupidatat Lorem
          reprehenderit pariatur. Ex ipsum duis ad amet officia ad dolor culpa
          in eu duis. Nostrud id duis nostrud reprehenderit exercitation
          deserunt sint fugiat cupidatat sit voluptate velit ut. Magna esse qui
          adipisicing velit aute Lorem. Nostrud ex voluptate culpa id enim sint
          anim consequat aute commodo dolore amet. Ea irure proident cupidatat
          nisi. Consectetur officia occaecat commodo minim irure irure eiusmod
          ipsum. Excepteur sit cupidatat sit eiusmod dolore elit cupidatat.
          Consequat exercitation mollit tempor nostrud culpa. Lorem eiusmod amet
          ut non aliquip sunt eu est commodo exercitation. Enim fugiat anim
          exercitation elit cillum culpa consectetur deserunt reprehenderit
          nostrud cupidatat dolor est esse. Excepteur est occaecat ut officia ad
          excepteur. Veniam ad do aliquip consequat aliqua do sit tempor ea.
          Amet tempor laboris commodo tempor id commodo ad dolor dolore
          consectetur pariatur.
        </p>
        <p>
          Dolor laboris in consectetur do. Tempor consectetur culpa mollit et
          consectetur do consequat culpa officia laborum. Cupidatat quis
          consequat voluptate officia. Esse sit aliqua et adipisicing elit duis
          est nostrud consequat commodo esse. Ex pariatur irure minim elit sunt
          qui laboris. Ex mollit sint nulla et ullamco amet esse mollit eiusmod.
          Sit mollit enim in enim. Reprehenderit esse qui Lorem ullamco esse
          proident. Nulla proident amet officia anim esse ea ullamco
          reprehenderit reprehenderit amet nulla reprehenderit. Laboris dolore
          velit non sint. Amet ipsum ut incididunt officia dolore qui
          adipisicing excepteur labore voluptate adipisicing eu veniam. Officia
          cillum Lorem ullamco ipsum mollit ex sint anim nisi ut consectetur
          aute veniam. Exercitation occaecat quis excepteur laborum excepteur
          eiusmod pariatur consequat. Velit consectetur cupidatat elit quis quis
          non nulla ut. Ut excepteur id cupidatat ut fugiat tempor consequat non
          sunt id commodo ex laborum magna. Fugiat tempor sint in magna
          voluptate ut quis sunt officia mollit ullamco labore est tempor. Et
          aliquip deserunt aliquip ad ex do. Incididunt commodo nulla minim
          consequat sunt deserunt ut et labore fugiat incididunt. Tempor Lorem
          ullamco ut ea do incididunt dolor ut excepteur aliquip ullamco aute
          culpa. Cupidatat sunt incididunt duis cupidatat officia eu cupidatat.
          Tempor ipsum non sunt reprehenderit sint dolor ullamco veniam eiusmod
          adipisicing ad irure do. Velit Lorem qui adipisicing deserunt commodo
          labore sit ea labore elit. Aliquip eu amet consequat culpa
          exercitation. Duis eiusmod ullamco duis excepteur veniam minim sint
          nulla officia. Nulla nulla voluptate velit eu in. Cillum eu occaecat
          cupidatat ex. Minim proident occaecat aliquip aute aliquip do aliquip
          aliquip laboris cupidatat anim sint. Commodo adipisicing pariatur
          Lorem magna. Reprehenderit ipsum pariatur fugiat nostrud eiusmod
          eiusmod dolor. Mollit esse velit ut do consequat ullamco eu labore
          sunt cillum laboris aute est occaecat. Quis enim et labore nostrud eu
          ut non cillum consequat. In amet dolor magna magna commodo ullamco
          incididunt et labore nostrud nisi id occaecat ut. Amet ut sunt aliqua
          minim. Culpa consectetur aliquip cillum amet id. Proident ea anim
          commodo do ut. Proident id minim id exercitation enim minim ullamco
          reprehenderit deserunt proident adipisicing nisi cillum. Dolore anim
          veniam cillum irure culpa consectetur cillum. Irure incididunt nostrud
          dolor voluptate reprehenderit exercitation sunt eiusmod ipsum proident
          minim deserunt dolore. Deserunt adipisicing ullamco ut nulla est est
          cupidatat nisi pariatur non do culpa tempor. Voluptate dolore ullamco
          labore Lorem laborum ut laborum id. Do qui labore irure Lorem sit nisi
          aute tempor nulla sunt ad officia laborum. Veniam pariatur eiusmod
          cillum enim veniam et ullamco excepteur. Ipsum enim nisi laboris minim
          ipsum cupidatat voluptate. Incididunt deserunt fugiat qui enim. Ipsum
          dolore sit Lorem laborum consequat cillum sit aliqua. Quis nisi esse
          sint enim qui deserunt laborum Lorem incididunt proident dolore amet.
          Proident Lorem id est irure nulla eiusmod est consectetur occaecat
          veniam. Anim ex elit mollit aute nostrud culpa consequat incididunt
          aliqua sunt.
        </p>
        <Modal
          isOpen={this.showDialog}
          onDismiss={this.close}
          ariaLabel="Modal"
        >
          <p>I have a nice border now.</p>
          <p>
            Note that we could have used the simpler <code>Dialog</code>{" "}
            instead.
          </p>
          <button id="modal-close-button" onClick={this.close}>
            Got it.
          </button>
        </Modal>
      </div>
    );
  }
});
