const src = {
  // pick imgs from the dom

  allImgs: [],
  allImgsDom: document.querySelectorAll(".main-window-imgs"),
  allVideosDom: document.querySelectorAll(".main-window-videos"),

  // ! new added
  allQsDom: document.querySelectorAll(".qs"),


  set() {
    let index = 0;
    this.allItems = {

      // !Template images
      arrowRound: this.allImgsDom[index++],
      blinkArrow: this.allImgsDom[index++],
      laerrow: this.allImgsDom[index++],
      laerrow2: this.allImgsDom[index++],
      logo: this.allImgsDom[index++],
      man: this.allImgsDom[index++],
      measurearrow: this.allImgsDom[index++],
      measurearrow2: this.allImgsDom[index++],
      redsize: this.allImgsDom[index++],                                         
      speech_off_btn: this.allImgsDom[index++],
      speech_on_btn: this.allImgsDom[index++],
      talk_cloud: this.allImgsDom[index++],
      iit_delhi_logo: this.allImgsDom[index++],
      // !Template images end

      // ! Procedure formula Nomenclature images 
      formulas_component_stress:this.allImgsDom[index++],
      formulas_efficiency:this.allImgsDom[index++],
      formulas_ideal:this.allImgsDom[index++],
      formulas_nomenclautre:this.allImgsDom[index++],
      formulas_non_ideal:this.allImgsDom[index++],
      formulas_procedure:this.allImgsDom[index++],
      formulas_universal:this.allImgsDom[index++],
      // ! Procedure formula Nomenclature images end

      //! EE10 images added here

      arrow_click_here:this.allImgsDom[index++],
      arrow_simple:this.allImgsDom[index++],
      btn_delete:this.allImgsDom[index++],
      btn_plot:this.allImgsDom[index++],
      btn_record:this.allImgsDom[index++],
      btn_reset:this.allImgsDom[index++],
      component_diode_1:this.allImgsDom[index++],
      component_diode_2:this.allImgsDom[index++],
      component_diode_3:this.allImgsDom[index++],
      component_diode_4:this.allImgsDom[index++],
      graph_bcg:this.allImgsDom[index++],
      part_1_circuit:this.allImgsDom[index++],
      part_1_curly_braces:this.allImgsDom[index++],
      part_1_tab_diodes:this.allImgsDom[index++],
      part_1_tab_incorrect:this.allImgsDom[index++],
      part_1_text_formulation_cmpltd:this.allImgsDom[index++],
      part_1_text_great_job:this.allImgsDom[index++],
      part_1_thumb_gif:this.allImgsDom[index++],
      part_1_try_again_text_1:this.allImgsDom[index++],
      part_1_try_again_text_2:this.allImgsDom[index++],
      part_1_try_again_text_3:this.allImgsDom[index++],
      part_2_a_1:this.allImgsDom[index++],
      part_2_circuit:this.allImgsDom[index++],
      part_2_graph_a:this.allImgsDom[index++],
      part_2_graph_full:this.allImgsDom[index++],
      part_2_graph_v1:this.allImgsDom[index++],
      part_2_graph_v2:this.allImgsDom[index++],
      part_2_graph_v3:this.allImgsDom[index++],
      part_2_text_1:this.allImgsDom[index++],
      part_2_text_2:this.allImgsDom[index++],
      part_2_v3:this.allImgsDom[index++],
      part_2_v_1:this.allImgsDom[index++],
      part_2_v_2:this.allImgsDom[index++],
      part_3_circuit:this.allImgsDom[index++],
      part_3_circuit_half_part:this.allImgsDom[index++],
      part_3_emoji:this.allImgsDom[index++],
      part_3_text_1:this.allImgsDom[index++],
      part_3_text_2:this.allImgsDom[index++],
      part_3_text_3:this.allImgsDom[index++],
      part_3_wave_1:this.allImgsDom[index++],
      part_3_wave_2:this.allImgsDom[index++],
      part_4_circuit:this.allImgsDom[index++],
      part_4_graph_a:this.allImgsDom[index++],
      part_4_graph_full:this.allImgsDom[index++],
      part_4_graph_v1:this.allImgsDom[index++],
      part_4_graph_v2:this.allImgsDom[index++],
      part_4_graph_v3:this.allImgsDom[index++],
      part_4_text_1:this.allImgsDom[index++],
      part_4_text_2:this.allImgsDom[index++],
      part_4_v_1:this.allImgsDom[index++],
      part_5_option_1:this.allImgsDom[index++],
      part_5_option_2:this.allImgsDom[index++],
      part_5_select_option:this.allImgsDom[index++],
      part_5_tab1:this.allImgsDom[index++],
      part_5_tab2:this.allImgsDom[index++],
      part_5_tab3:this.allImgsDom[index++],
      part_5_tab4:this.allImgsDom[index++],
      part_5_tab5:this.allImgsDom[index++],
      part_6_box_rf:this.allImgsDom[index++],
      part_6_select_tab_1:this.allImgsDom[index++],
      part_6_select_tab_2:this.allImgsDom[index++],
      part_6_select_tab_3:this.allImgsDom[index++],
      part_6_tab1:this.allImgsDom[index++],
      part_6_tab2:this.allImgsDom[index++],
      part_6_tab3:this.allImgsDom[index++],
      part_6_tab4:this.allImgsDom[index++],
      part_6_text_1:this.allImgsDom[index++],
      right_tick_1:this.allImgsDom[index++],
      symbol_d1:this.allImgsDom[index++],
      symbol_d2:this.allImgsDom[index++],
      symbol_d3:this.allImgsDom[index++],
      symbol_d4:this.allImgsDom[index++],
      symbol_wrong_1:this.allImgsDom[index++],
      symbol_wrong_2:this.allImgsDom[index++],
      symbol_wrong_3:this.allImgsDom[index++],
      symbol_wrong_4:this.allImgsDom[index++],
      text_vs:this.allImgsDom[index++],
      box_qs1:this.allImgsDom[index++],
      box_qs2:this.allImgsDom[index++],
      box_qs3:this.allImgsDom[index++],
      box_qs4:this.allImgsDom[index++],
      part_1_helper:this.allImgsDom[index++],
      part_1_helper_2:this.allImgsDom[index++],
      part_1_helper_3:this.allImgsDom[index++],
      part_1_helper_4:this.allImgsDom[index++],
      part_5_resistance_text_value:this.allImgsDom[index++],
      part_3_start_wave:this.allImgsDom[index++],
      right_tick_2:this.allImgsDom[index++],
      right_tick_3:this.allImgsDom[index++],
      symbol_o:this.allImgsDom[index++],
      part_1_text_1:this.allImgsDom[index++],
      part_1_text_2:this.allImgsDom[index++],
      
      //! EE10 images end here



      // * Question Mark
      domQs1: this.allQsDom[0],
      domQs2: this.allQsDom[1],
      domQs3: this.allQsDom[2],
      domQs4: this.allQsDom[3],
      domQs5: this.allQsDom[4],
      domQs6: this.allQsDom[5],
      
      
      // * Videos
      // yoke_front_to_back: this.allVideosDom[0],
      // yoke_front_to_side: this.allVideosDom[1],
      // panel1: this.allVideosDom[2],
      // panel2: this.allVideosDom[3],

      bfs_video: this.allVideosDom[0],
    };
  },
  allImgsInitialAxis: [],
  get(itemName) {
    return this.allItems[itemName];
  },
};
// setting src
src.set();
