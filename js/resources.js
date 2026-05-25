'use strict';
const RESOURCES = [
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 1', desc:'Self-learning module for Kindergarten, Quarter 2, Week 1.', file:'materials/Kinder/SLMQ2KINDERW1_v2.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 2', desc:'Self-learning module for Kindergarten, Quarter 2, Week 2.', file:'materials/Kinder/SLMQ2KINDERW2_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 3', desc:'Self-learning module for Kindergarten, Quarter 2, Week 3.', file:'materials/Kinder/SLMQ2KINDERW3_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 4', desc:'Self-learning module for Kindergarten, Quarter 2, Week 4.', file:'materials/Kinder/SLMQ2KINDERW4_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 5', desc:'Self-learning module for Kindergarten, Quarter 2, Week 5.', file:'materials/Kinder/SLMQ2KINDERW5_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 6', desc:'Self-learning module for Kindergarten, Quarter 2, Week 6.', file:'materials/Kinder/SLMQ2KINDERW6_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 7', desc:'Self-learning module for Kindergarten, Quarter 2, Week 7.', file:'materials/Kinder/SLMQ2KINDERW7_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 8', desc:'Self-learning module for Kindergarten, Quarter 2, Week 8.', file:'materials/Kinder/SLMQ2KINDERW8_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 9', desc:'Self-learning module for Kindergarten, Quarter 2, Week 9.', file:'materials/Kinder/SLMQ2KINDERW9_v2.pdf.pdf' },
  { grade:'Kinder', subject:'General', type:'PDF', title:'SLM Q2 Kinder Week 10', desc:'Self-learning module for Kindergarten, Quarter 2, Week 10.', file:'materials/Kinder/SLMQ2KINDERW10_v2.pdf.pdf' },
  { grade:'Grade 1', subject:'Araling Panlipunan', type:'PDF', title:'AP 1 – Pagsasabi ng Batayang Impormasyon', desc:'Contextualized learner resource in Araling Panlipunan 1 – stating basic personal information.', file:'materials/Grade 1/Contextualized Learner Resource in Araling Panlipunan 1 Pagsasabi ng Batayang Impormasyon v2.1.pdf' },
  { grade:'Grade 1', subject:'Filipino', type:'PDF', title:'Filipino 1 – DAP Quarter 3 Module 1', desc:'Decoding and phonics module for Filipino 1, Quarter 3.', file:'materials/Grade 1/DAP_FILIPINO1_QUARTER3_M1.pdf' },
  { grade:'Grade 1', subject:'Mathematics', type:'PDF', title:'Maths Grade 1 – Q1 Module 3B', desc:'Mathematics self-learning module for Grade 1, Quarter 1, Module 3B.', file:'materials/Grade 1/Grade-1.Maths-Q1-M3B.pdf' },
  { grade:'Grade 1', subject:'Health', type:'PDF', title:'Kalusugan ay Kayamanan', desc:'Health module on the value of good health as a form of wealth.', file:'materials/Grade 1/Kalusugan ay Kayamanan.pdf' },
  { grade:'Grade 1', subject:'English', type:'PDF', title:'Reading Remediation (Lamayo LTR)', desc:'Literacy and remedial reading activity sheets for Grade 1 learners.', file:'materials/Grade 1/Lamayo-LTR-Reading-Remediation-Edited-09-01-21.pdf' },
  { grade:'Grade 2', subject:'Filipino', type:'PDF', title:'A.BA.KA.DA – Pagbasa at Pagsulat', desc:'Reading and writing workbook for Grade 2 Filipino.', file:'materials/Grade 2/A.BA.KA.DA- Pagbasa at Pagsulat.pdf' },
  { grade:'Grade 2', subject:'Araling Panlipunan', type:'PDF', title:'AP 2 – Pinagmulan ng Komunidad', desc:'Module on the origins and history of the community for Grade 2.', file:'materials/Grade 2/Passed 1866-12-20MELCS Baguio PinagmulanngKomunidad.pdf' },
  { grade:'Grade 2', subject:'English', type:'PDF', title:'English 2 – Pre-Writing Activities', desc:'Activity sheets for generating ideas through pre-writing strategies.', file:'materials/Grade 2/Passed 415-12-20MELCS ABRA Generate ideas through pre-writing activities.pdf' },
  { grade:'Grade 2', subject:'MAPEH', type:'PDF', title:'Music 2 – Pagtukoy sa mga Alkitran ng Tono', desc:'Music module identifying tone ladders and musical scales.', file:'materials/Grade 2/passed_751-13-21MELC_PAGTUKOY SA MGA ALKITRAN NG TONO.pdf' },
  { grade:'Grade 2', subject:'Mathematics', type:'PDF', title:'Math 2 – Multiplication 1–10 by 2,3,4,5,10', desc:'Module on multiplying numbers 1 to 10 by 2, 3, 4, 5, and 10.', file:'materials/Grade 2/passed_758-13-21MELCS_Benguet_ Multiplication of Numbers 1 to 10 by 2,3,4,5and 10.pdf' },
  { grade:'Grade 3', subject:'Araling Panlipunan', type:'PDF', title:'AP 3 – Kababaihan sa Panahon ng Ninuno', desc:'Social studies module on women in pre-colonial Philippine history.', file:'materials/Grade 3/5 - Kababaihan sa panahon ng ninuno.pdf' },
  { grade:'Grade 3', subject:'English', type:'PDF', title:'English 3 – Reading Time Q1 Week 2', desc:'Reading comprehension activities for Grade 3, Quarter 1, Week 2.', file:'materials/Grade 3/ENGLISH First Quarter Week 2 READING TIME!.pdf' },
  { grade:'Grade 3', subject:'MAPEH', type:'PDF', title:'MAPEH 3 – Movements in Location & Direction', desc:'Module describing movement in location, direction, level, pathway and plane.', file:'materials/Grade 3/Passed 483-12-20MELCS ABRA Describes movements in a location, direction, level, pathway and plane moves in....pdf' },
  { grade:'Grade 3', subject:'Filipino', type:'PDF', title:'MTB-MLE 3 – SLM Q1 Module 2', desc:'Mother Tongue-Based Multilingual Education self-learning module.', file:'materials/Grade 3/SLMQ1G3MTBM2_v2.pdf' },
  { grade:'Grade 3', subject:'Filipino', type:'PDF', title:'Sa Hirap at Ginhawa', desc:'Filipino reading module about perseverance and hardship.', file:'materials/Grade 3/Sa Hirap at Ginhawa v1.0.compressed.pdf' },
  { grade:'Grade 3', subject:'Filipino', type:'PDF', title:'Sa Ating mga Kamay', desc:'Filipino language module about community cooperation and hands-on work.', file:'materials/Grade 3/Sa ating mga Kamay.pdf' },
  { grade:'Grade 3', subject:'Science', type:'PDF', title:'Science 3 – NISMED Module 7', desc:'UP NISMED science module 7 for Grade 3 learners.', file:'materials/Grade 3/UPNISMED_2016MOD07.pdf' },
  { grade:'Grade 4', subject:'MAPEH', type:'PDF', title:'MAPEH 4 – Ang Tekstura (Arts)', desc:'Arts module exploring the concept of texture in visual arts.', file:'materials/Grade 4/07- Ang tekstura.pdf' },
  { grade:'Grade 4', subject:'ESP', type:'PDF', title:'ESP 4 – Love Languages', desc:'Edukasyon sa Pagpapakatao module on love languages and values.', file:'materials/Grade 4/1 Love Languages-new.pdf' },
  { grade:'Grade 4', subject:'Mathematics', type:'PDF', title:'Math 4 – Multiplication of 5+ Digit Factors with Zeros', desc:'Module on multiplying 5-or-more digit factors with 1–3 zeros.', file:'materials/Grade 4/12.  MULTIPLICATION OF 5- OR MORE DIGIT FACTORS HAVING 1 TO 3 ZEROS IN BOTH FACTORS WITHOUT REGROUPING.pdf' },
  { grade:'Grade 4', subject:'Araling Panlipunan', type:'PDF', title:'AP 4 – Likas Kayang Pag-unlad ng Bansa', desc:'Q2 Module 4 on sustainable national development for Araling Panlipunan 4.', file:'materials/Grade 4/Araling Panlipunan (G4Q2M4 ) - Likas Kayang Pag-unlad ng Bansa.pdf' },
  { grade:'Grade 4', subject:'Filipino', type:'PDF', title:'Filipino 4 – LAS Q4 Module 8', desc:'Learner activity sheet for Filipino 4, Quarter 4, Module 8.', file:'materials/Grade 4/FILIPINO-4-LAS-8-Q4-FINAL-FINAL.pdf' },
  { grade:'Grade 4', subject:'MAPEH', type:'PDF', title:'Music 4 – Module 8', desc:'Music self-learning module 8 for Grade 4.', file:'materials/Grade 4/MUSIKA  G4 module 8.pdf' },
  { grade:'Grade 4', subject:'Filipino', type:'PDF', title:'Filipino 4 – SLM Q1 P.EM Module 1', desc:'Self-learning module Q1 in Filipino 4, Practical Expressions and Meanings.', file:'materials/Grade 4/SLMQ1G4P.EM1_v2.pdf' },
  { grade:'Grade 4', subject:'Applied', type:'PDF', title:'TLE 4 – Saligang Kaalaman sa Pananahi', desc:'Foundational knowledge in sewing and needlework for Grade 4 TLE.', file:'materials/Grade 4/Saligang Kaalaman sa Pananahi.pdf' },
  { grade:'Grade 4', subject:'Science', type:'PDF', title:'Science 4 – Animals Hatched vs Born Alive', desc:'MISOSA module on animals that hatch from eggs and those born alive.', file:'materials/Grade 4/Science 4 MISOSA - ANIMALS HATCHED FROM EGGS AND BORN ALIVE.pdf' },
  { grade:'Grade 4', subject:'English', type:'PDF', title:'English 4 – Collective Nouns', desc:'Activity sheet on identifying and using collective nouns in sentences.', file:'materials/Grade 4/passed_820-13-21MELCS_Benguet_collective nouns-v1 (1).pdf' },
  { grade:'Grade 5', subject:'Applied', type:'PDF', title:'TLE 5 – Matalinong Pamamahala ng Tindahan', desc:'Smart management of a small sari-sari store, Module 2.', file:'materials/Grade 5/02_Matalinong Pamamahala ng Tingiang Tindahan.pdf' },
  { grade:'Grade 5', subject:'ESP', type:'PDF', title:'Islamic Values Education V', desc:'Body module for Islamic Values Education, Grade 5 (English version).', file:'materials/Grade 5/3. Islamic Values Ed V Body_En.pdf' },
  { grade:'Grade 5', subject:'Araling Panlipunan', type:'PDF', title:'AP 5 – Mga Unang Pilipino', desc:'Social studies module on the first Filipinos and their origins.', file:'materials/Grade 5/43 - MGA UNANG PILIPINO.pdf' },
  { grade:'Grade 5', subject:'English', type:'PDF', title:'Dictionary – Reference Skills', desc:'Revised 2010 dictionary and reference skills resource for Grade 5.', file:'materials/Grade 5/Dictionary rev 2010.pdf' },
  { grade:'Grade 5', subject:'Science', type:'PDF', title:'Science 5 – Myths vs Scientific Explanations', desc:'Module comparing myths and scientific explanations of natural phenomena.', file:'materials/Grade 5/Myths and Scientific Explanations Behind Natural Phenomena final.pdf' },
  { grade:'Grade 5', subject:'MAPEH', type:'PDF', title:'MAPEH 5 – Indigenous Games of the Sumadel Sub-Tribe', desc:'Module on indigenous games of the Sumadel sub-tribe in Tabuk City.', file:'materials/Grade 5/Passed 51-4 Tabuk City Indigenous Games of the Sumadel Sub Tribe.pdf' },
  { grade:'Grade 5', subject:'MAPEH', type:'PDF', title:'Music 5 – Ritmo 2-2', desc:'Music module on rhythm and musical patterns, Grade 5.', file:'materials/Grade 5/Ritmo 2-2 (finished).pdf' },
  { grade:'Grade 6', subject:'Filipino', type:'PDF', title:'Filipino 6 – Ulat Balita at Patalastas', desc:'Module on details of news reports and writing advertisements.', file:'materials/Grade 6/2 - mga detalye ng ulat balita at pagsulat ng patalastas at balita (1).pdf' },
  { grade:'Grade 6', subject:'Araling Panlipunan', type:'PDF', title:'AP 6 – Materyal o Di-Materyal na Kultura', desc:'Module on material and non-material culture in Araling Panlipunan.', file:'materials/Grade 6/32 - Materyal o Di_Materyal na Kultura.pdf' },
  { grade:'Grade 6', subject:'English', type:'PDF', title:'English 6 – Words with Multiple Meanings', desc:'Interpreting words with multiple meanings using a dictionary.', file:'materials/Grade 6/37- INTERPRETING WORDS WITH MULTIPLE MEANINGS USING A DICTIONARY grade6.pdf' },
  { grade:'Grade 6', subject:'ESP', type:'PDF', title:'ESP 6 – Comprehensive Sexuality Education', desc:'Learner activity sheets with integrated Comprehensive Sexuality Education.', file:'materials/Grade 6/SDO SILAY ESP 6 LEARNER_S ACTIVITY SCHEETS WITH COMPREHENSIVE SEXUALITY EDUCATION INTEGRATION.pdf' },
  { grade:'Grade 6', subject:'Applied', type:'PDF', title:'TLE 6 – Worksheets', desc:'Technology and Livelihood Education worksheets for Grade 6.', file:'materials/Grade 6/TLE 6 WORKSHEETS.pdf' },
  { grade:'Grade 6', subject:'Science', type:'PDF', title:'Science 6 – The Nervous System', desc:'Module on the structure and function of the human nervous system.', file:'materials/Grade 6/The Nervous System-Final.pdf' },
  { grade:'Grade 7', subject:'Filipino', type:'PDF', title:'Filipino 7 – Adarna Modyul 1', desc:'Module 1 on the epic Ibong Adarna for Grade 7 Filipino.', file:'materials/Grade 7/ADARNA MODYUL_1.pdf' },
  { grade:'Grade 7', subject:'Science', type:'PDF', title:'Science 7 – The Earth\'s Atmosphere', desc:'Module 14 exploring layers and characteristics of Earth\'s atmosphere.', file:'materials/Grade 7/Module 14 The Earth_s Atmosphere.pdf' },
  { grade:'Grade 7', subject:'Health', type:'PDF', title:'OHSP PE 1 Q2 Module 3', desc:'Occupational Health & Safety and Physical Education module for Grade 7.', file:'materials/Grade 7/OHSPPE1Q2Module3.pdf' },
  { grade:'Grade 7', subject:'English', type:'PDF', title:'English 7 – Analogies', desc:'Module on identifying and using analogies in language.', file:'materials/Grade 7/Passed 5194-13-21MELCS-Baguio_Analogies_Diona_Palayen.pdf' },
  { grade:'Grade 7', subject:'Applied', type:'DOC', title:'TLE 7 – Entrepreneurship Module 5', desc:'Entrepreneurship module 5 covering business concepts for Grade 7 TLE.', file:'materials/Grade 7/entre module 5.doc' },
  { grade:'Grade 7', subject:'Mathematics', type:'PDF', title:'Math 7 – Scientific Notation & Problem Solving', desc:'Module 9 on scientific notation and problem-solving strategies.', file:'materials/Grade 7/math7_q1mod9_scientific_notation_problem_solving_evangeline_chalutag_juliet_bortikey_rosemary_joyce_abuan_bgo_v1.pdf' },
  { grade:'Grade 7', subject:'Araling Panlipunan', type:'PDF', title:'AP 7 – Karapatan Mo, Alamin Mo', desc:'Module on human rights awareness and entitlements for Grade 7.', file:'materials/Grade 7/KARAPATAN MO ALAMIN MO.PDF' },
  { grade:'Grade 8', subject:'MAPEH', type:'PDF', title:'MAPEH 8 – Hand & Arm Movement', desc:'Module on hand and arm movement techniques in physical education.', file:'materials/Grade 8/Passed 5089-13-21MELCS-Baguio-hand_arm_movement.pdf' },
  { grade:'Grade 8', subject:'Filipino', type:'DOC', title:'Filipino 8 – Quarter 2 Module 2', desc:'Filipino 8 learner module for Quarter 2, covering literary analysis.', file:'materials/Grade 8/Qrtr2 Mod2.doc' },
  { grade:'Grade 8', subject:'Applied', type:'PDF', title:'TLE 8 – Beauty & Nail Care Module 1', desc:'Beauty care and nail care fundamentals for Grade 8 TLE, Q1 Module 1.', file:'materials/Grade 8/beauty-and-nail-care-8_q1_mod1.pdf' },
  { grade:'Grade 8', subject:'Filipino', type:'PDF', title:'Filipino 8 – Panandang Kohesiv Modyul 4', desc:'Module 4 on cohesive devices and discourse markers in Filipino.', file:'materials/Grade 8/modyul 4-Panandang Kohesiv.pdf' },
  { grade:'Grade 9', subject:'ESP', type:'DOCX', title:'ESP 9 – Kagalingan sa Paggawa', desc:'Activity sheet on work ethics and excellence in personal development.', file:'materials/Grade 9/EsP9-Learner_s Activity Sheet.Kagalingan sa Paggawa.docx' },
  { grade:'Grade 9', subject:'English', type:'PDF', title:'English 9 – Going Places Module 9', desc:'Module 9 on travel, culture, and reading comprehension for Grade 9.', file:'materials/Grade 9/Module 9 Going Places.pdf' },
  { grade:'Grade 9', subject:'Filipino', type:'PDF', title:'Filipino 9 – Teoryang Romantisismo Modyul 2', desc:'Analyzing literary works through the Romantic literary theory.', file:'materials/Grade 9/Modyul 2 Pagsusuri ng Akda Batay sa Teoryang Romantisismo.pdf' },
  { grade:'Grade 9', subject:'MAPEH', type:'PDF', title:'MAPEH 9 – Renaissance Arts', desc:'Module on Renaissance arts, their characteristics and cultural context.', file:'materials/Grade 9/Passed 1753-12-20MELCS- Baguio-renaissance_arts.pdf' },
  { grade:'Grade 9', subject:'MAPEH', type:'PDF', title:'MAPEH 9 – Social Dances', desc:'Module on social dances: types, history, and performance.', file:'materials/Grade 9/Passed-1730-12-20MELCS-Baguio_social_dances_fixedlayout.pdf' },
  { grade:'Grade 9', subject:'English', type:'PDF', title:'English 9 – Speak Up! Relay One\'s Message', desc:'SIM on effectively relaying messages and oral communication for Grade 9.', file:'materials/Grade 9/SDO-MP-6150-09-19-English9-SIM-Q4-W6-Speak Up! Relay One_s Message-v.1.pdf' },
  { grade:'Grade 9', subject:'Araling Panlipunan', type:'PDF', title:'AP 9 – Agricultural Practices of Balaoa, Tadian', desc:'Module on traditional agricultural practices of the Balaoa community.', file:'materials/Grade 9/SDO-MP-Passed-3154-09-19-AP9-Q4-mod3-Agricultural Practices of Balaoa, Tadian.v.2.pdf' },
  { grade:'Grade 9', subject:'Applied', type:'PDF', title:'TLE 9 – Housekeeping Module 1', desc:'Housekeeping fundamentals module 1 for Grade 9 TLE.', file:'materials/Grade 9/SLMQ2HousekeepingM1.pdf' },
  { grade:'Grade 9', subject:'Applied', type:'PDF', title:'TLE 9 – Housekeeping Module 2', desc:'Housekeeping module 2 covering advanced procedures and standards.', file:'materials/Grade 9/SLMQ2HousekeepingM2.pdf' },
  { grade:'Grade 10', subject:'Mathematics', type:'DOC', title:'Math 10 – Fundamental Principle of Counting', desc:'Activity sheet on the fundamental counting principle and combinatorics.', file:'materials/Grade 10/Activity-Sheet_Gr.-10_Fundamental-Principle-of-Counting-Techniques.doc' },
  { grade:'Grade 10', subject:'English', type:'PPT', title:'English 10 – Bibliography', desc:'PowerPoint presentation on writing and formatting bibliographies.', file:'materials/Grade 10/Bibliography.pptx' },
  { grade:'Grade 10', subject:'Science', type:'DOC', title:'Chemistry 10 – Behavior of Gases M8', desc:'Module 8 on the behavior of gases and gas laws for Grade 10 Chemistry.', file:'materials/Grade 10/Chem M8 Behavior of Gases.doc' },
  { grade:'Grade 10', subject:'ESP', type:'DOC', title:'ESP 10 – 1st Quarter Module 1.1', desc:'Edukasyon sa Pagpapakatao for Grade 10, first quarter, lesson 1.1.', file:'materials/Grade 10/ESP GRADE 10 - 1ST QTR.1.1.doc' },
  { grade:'Grade 10', subject:'Applied', type:'DOC', title:'TLE 10 – Fish Processing Lesson Plan', desc:'Detailed lesson plan for fish processing under Grade 10 TLE.', file:'materials/Grade 10/LESSON-PLAN-IN-FISH-PROCESSING-GRADE-10-1.doc' },
  { grade:'Grade 10', subject:'Filipino', type:'PDF', title:'Filipino 10 – Sining sa Pananalita', desc:'Module on the art of speaking and figurative language in Filipino.', file:'materials/Grade 10/Passed 127-08-19 Mountain Province Sining sa Pananalita.pdf' },
  { grade:'Grade 10', subject:'ESP', type:'PDF', title:'ESP 10 – Intellectual Property Rights', desc:'Module on intellectual property rights and ethical digital citizenship.', file:'materials/Grade 10/Passed 5099-13-21MELCS-Baguio_intellectual_property_rights.pdf' },
  { grade:'Grade 10', subject:'Araling Panlipunan', type:'PDF', title:'AP 10 – Isyung Pangekonomiya at Migrasyon', desc:'Module on economic issues, causes and effects of migration.', file:'materials/Grade 10/Passed-1353-13-21MELCS-Tabuk City_Isyung pangekonomiya dahilan at epekto ng migrasyon.pdf' },
  { grade:'Grade 10', subject:'Health', type:'PDF', title:'Health 10 – Understanding Lifestyle', desc:'Module on understanding healthy and unhealthy lifestyles for Grade 10.', file:'materials/Grade 10/Passed-640-12-20MELCS-Baguio_understanding_lifestyle_fixedlayout.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Empowerment Technologies (SHS)', desc:'Core course in ICT and digital technologies for Senior High School.', file:'materials/Grade 11/APPLIED-Empowerment Technologies (for the Strand)_05.2016.pdf' },
  { grade:'Grade 11', subject:'English', type:'PDF', title:'English for Academic & Professional Purposes', desc:'Core SHS course on academic and professional writing and communication.', file:'materials/Grade 11/APPLIED-English for Academic and Professional Purposes_05.2016.pdf' },
  { grade:'Grade 11', subject:'Filipino', type:'PDF', title:'Filipino sa Piling Larang (Akademik)', desc:'Filipino for the academic track – language and literature module.', file:'materials/Grade 11/APPLIED-Filipino sa Piling Larang (Akademik)_05.2016.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Practical Research 1 (SHS)', desc:'Introduction to qualitative research for Senior High School.', file:'materials/Grade 11/APPLIED-Practical Research 1_05.2016.pdf' },
  { grade:'Grade 11', subject:'English', type:'PDF', title:'MIL Q1 M8 – Media & Information Literacy', desc:'Media and Information Literacy learner module Q1, Module 8.', file:'materials/Grade 11/B MIL Q1M8 Learner Copy Final Copy.pdf' },
  { grade:'Grade 11', subject:'MAPEH', type:'PDF', title:'Contemporary Philippine Arts from the Regions', desc:'SHS core subject on Philippine arts across different regions.', file:'materials/Grade 11/Contemporary Philippine Arts from the Region_05.2016.pdf' },
  { grade:'Grade 11', subject:'MAPEH', type:'PDF', title:'Arts 11 – Creative Adaptation Activity Sheet', desc:'Activity sheet on creative adaptation of Philippine art forms.', file:'materials/Grade 11/Creative Adaptation AS.pdf' },
  { grade:'Grade 11', subject:'Science', type:'DOCX', title:'Earth & Life Science 11 – Geologic Processes & Hazards', desc:'Module on geologic processes and natural hazards in Earth & Life Science.', file:'materials/Grade 11/Earth & Life Science 11 Geologic Processes & Hazards.docx' },
  { grade:'Grade 11', subject:'Filipino', type:'PDF', title:'Fil sa Piling Larang – Akademikong Pagsulat Q1 M1', desc:'Module 1 on academic writing in Filipino for the academic track.', file:'materials/Grade 11/Fil Sa Piling Larang (Akademik)_q1_mod1_AkadimikongPagsulat.pdf' },
  { grade:'Grade 11', subject:'ESP', type:'PDF', title:'Personal Development (Pansariling Kaunlaran)', desc:'SHS core course on personal development, identity, and well-being.', file:'materials/Grade 11/Pansariling Kaunlaran (Personal Development)_05.2016.pdf' },
  { grade:'Grade 11', subject:'English', type:'PDF', title:'English 11 – Comparing Written Texts Across Disciplines', desc:'Module on comparing and contrasting patterns of written texts.', file:'materials/Grade 11/Passed 1652-13-21MELCS DepEd-CAR RO Comparing and Contrasting Patterns of Written Texts across Disciplines.pdf' },
  { grade:'Grade 11', subject:'Mathematics', type:'PDF', title:'Probability and Statistics Gr. 11 Worktext', desc:'Comprehensive worktext on probability and statistics for Grade 11.', file:'materials/Grade 11/Probability and Statistics GR11_Worktext.pdf' },
  { grade:'Grade 11', subject:'Science', type:'PDF', title:'Science 11 – Properties of Molecules & Intermolecular Forces', desc:'Activity sheet on intermolecular forces, physical states, and solubility.', file:'materials/Grade 11/ACTIVITY-SHEET-Properties-of-molecules-based-on-Intermolecular-force-of-attraction-Physical-states-and-its-solubility..pdf' },
  { grade:'Grade 11', subject:'Mathematics', type:'DOCX', title:'Statistics 11 – Continuous and Discrete Data', desc:'Module distinguishing between continuous and discrete data types.', file:'materials/Grade 11/continuous and discrete.docx' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M1.1 – ICT Fundamentals', desc:'Empowerment Technologies module 1.1 – Introduction to ICT.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM1.1_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M1.2 – Online Safety', desc:'Module 1.2 on responsible and safe use of online platforms.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM1.2_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M2 – Word Processing', desc:'Module 2 on using word processing tools effectively.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM2_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M3 – Spreadsheets', desc:'Module 3 covering spreadsheet applications and data management.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM3_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M4.1 – Presentations', desc:'Module 4.1 on creating effective multimedia presentations.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM4.1_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M4.2 – Advanced Presentations', desc:'Module 4.2 on advanced presentation design and delivery.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM4.2_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M4.3 – Digital Storytelling', desc:'Module 4.3 on digital storytelling using multimedia tools.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM4.3_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M5 – Online Collaboration', desc:'Module 5 on using online collaboration and productivity tools.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM5_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M6 – Social Media', desc:'Module 6 on responsible use of social media platforms.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM6_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M7 – Web Design Basics', desc:'Module 7 introduction to web design and development.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM7_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M8 – Digital Graphics', desc:'Module 8 on creating and editing digital graphics.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM8_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M9 – Video Production', desc:'Module 9 on video production and digital filmmaking.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM9_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M10 – Animation & Multimedia', desc:'Module 10 on animation and multimedia production.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM10_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'Emp Tech M11 – Capstone & ePortfolio', desc:'Module 11 on building a capstone project and e-portfolio.', file:'materials/Grade 11/SLMQ1SHSEmpTech_v2/SLMQ1SHSEmpTechM11_v2.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'ABM – Organization & Management Activity Sheet', desc:'Activity sheet v1.0 on organizational management for ABM strand.', file:'materials/Grade 11/ABM/19-Org&Mgt AS v1.0.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'ABM – Business Finance Q1 Module 1', desc:'Learner copy covering introduction to business finance for ABM.', file:'materials/Grade 11/ABM/B Grade11 Q1M1 BusinessFinance Learner Copy final.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'ABM – Organization & Management Q1M1', desc:'Corrected module on organizational theory and management principles.', file:'materials/Grade 11/ABM/Organization and Management Module Q1M1_Corrected.pdf' },
  { grade:'Grade 11', subject:'Applied', type:'PDF', title:'ABM – Commission (Business Math)', desc:'Module on computing commission and sales in business mathematics.', file:'materials/Grade 11/ABM/Passed 1811-12-20MELCS-Baguio-Commission.pdf' },
  { grade:'Grade 11', subject:'Mathematics', type:'PDF', title:'ABM – Ratio and Proportion', desc:'Module on ratio and proportion for the ABM strand in Grade 11.', file:'materials/Grade 11/ABM/Passed 5230-13-21MELCS-Baguio_Ratio-and-Proportion.pdf' },
  { grade:'Grade 11', subject:'Filipino', type:'DOCX', title:'HUMSS – GAD Integrated Lesson Plan', desc:'Gender and Development integrated lesson plan for HUMSS strand.', file:'materials/Grade 11/HUMSS/GAD-INTEGRATED-LESSON-PLAN_2.docx' },
  { grade:'Grade 11', subject:'Filipino', type:'PDF', title:'HUMSS – Malikhaing Pagsulat', desc:'Creative writing module for the HUMSS strand, covering various forms.', file:'materials/Grade 11/HUMSS/passed-695-12-20MELCS-Benguet-Malikhaing-Pagsulat.pdf' },
  { grade:'Grade 11', subject:'Science', type:'PDF', title:'STEM – Cellular Respiration Module', desc:'Module on cellular respiration processes for the STEM strand.', file:'materials/Grade 11/STEM/Passed 1834-12-20MELCS-Baguio-CellularRespiratory.pdf' },
  { grade:'Grade 11', subject:'Mathematics', type:'PDF', title:'STEM – Pre-Calculus LM SHS', desc:'Learner\'s manual for Pre-Calculus – functions, conics, trigonometry.', file:'materials/Grade 11/STEM/Pre-Calc LM SHS v.1.pdf' },
  { grade:'Grade 12', subject:'MAPEH', type:'PDF', title:'Contemporary Arts 12 Q2M1', desc:'Teacher copy for Contemporary Arts 12, Quarter 2, Module 1.', file:'materials/Grade 12/A CONTEMPORARY ARTS 12 Q2M1 Teacher Copy Final Layout.pdf' },
  { grade:'Grade 12', subject:'English', type:'PDF', title:'Creative Writing 12 Q2M1', desc:'Teacher copy for Creative Writing 12, Quarter 2, Module 1.', file:'materials/Grade 12/A CREATIVE WRITING 12 Q2M1 Teacher Copy Final Layout (1).pdf' },
  { grade:'Grade 12', subject:'Science', type:'PDF', title:'General Biology I – Q2M4', desc:'Teacher copy on General Biology I, Quarter 2, Module 4 for Grade 12.', file:'materials/Grade 12/A GENERAL BIOLOGY I 12 Q2M4 Teacher Copy Final Layout.pdf' },
  { grade:'Grade 12', subject:'Science', type:'PDF', title:'General Physics I – Q2M2', desc:'Teacher copy on General Physics I, Quarter 2, Module 2.', file:'materials/Grade 12/A GENERAL PHYSICS I 12 Q2M2 Teacher Copy.pdf' },
  { grade:'Grade 12', subject:'Science', type:'PDF', title:'General Physics II – Q4M1', desc:'Teacher copy on General Physics II, Quarter 4, Module 1.', file:'materials/Grade 12/A GENERAL PHYSICS II Q4M1 Teacher Copy Final Layout.pdf' },
  { grade:'Grade 12', subject:'Science', type:'PDF', title:'Science 6 Q3M2 (Grade 12 Teacher Copy)', desc:'Teacher copy for Science 6, Quarter 3, Module 2.', file:'materials/Grade 12/A SCIENCE 6 Q3M2 Teacher Copy Final Layout.pdf' },
  { grade:'Grade 12', subject:'Applied', type:'PDF', title:'Applied Economics – Summative Test', desc:'Summative assessment for Applied Economics, Grade 12.', file:'materials/Grade 12/Applied Economics - Summative Test.pdf' },
  { grade:'Grade 12', subject:'Science', type:'PDF', title:'General Biology II – Q1M1.1', desc:'Learner copy for General Biology II, Quarter 1, Module 1.1.', file:'materials/Grade 12/B GENERAL BIOLOGY II 12 Q1M1.1 Learner-Copy Final Layout.pdf' },
  { grade:'Grade 12', subject:'Filipino', type:'PDF', title:'Filipino 12 – Q1M3 Akademik', desc:'Learner copy for Filipino 12, Quarter 1, Module 3 (Academic Track).', file:'materials/Grade 12/B Grade 12 Q1M3 Learner Copy Akademik Final Layout.pdf' },
  { grade:'Grade 12', subject:'Applied', type:'PDF', title:'Trends, Networks & Critical Thinking 21st Century Q2M1', desc:'Module on 21st century trends, networks and critical thinking skills.', file:'materials/Grade 12/Passed 1275-13-21MELCS Kalinga Trends, Networks, and Critical Thinking in the 21st Century(Second Quarter, Module 1).pdf' },
  { grade:'Grade 12', subject:'Araling Panlipunan', type:'PDF', title:'AP 12 – State and Non-State Institutions', desc:'Module on state and non-state institutions and governance.', file:'materials/Grade 12/Passed 1714-12-20MELCS-Baguio State-and-Non-State-Institutions.pdf' },
  { grade:'Grade 12', subject:'ESP', type:'PDF', title:'Introduction to World Religions & Belief Systems', desc:'HUMSS module on world religions and belief systems.', file:'materials/Grade 12/Passes 276-09-19 Kalinga Introduction to World Religions and Belief Systems - Module for Humanities and Social Science.pdf' },
  { grade:'Grade 12', subject:'Science', type:'DOCX', title:'Physical Science 12 Q3 LAS6 (LRMS)', desc:'Learner activity sheet for Physical Science 12, Quarter 3, LAS 6.', file:'materials/Grade 12/PhySci12_Q3_LAS6_LRMS.docx' },
];

const SUBJECT_COLORS = {
  'Mathematics':        '#3B82F6',
  'Science':            '#10B981',
  'Filipino':           '#EF4444',
  'English':            '#8B5CF6',
  'Araling Panlipunan': '#F59E0B',
  'ESP':                '#EC4899',
  'MAPEH':              '#06B6D4',
  'Health':             '#14B8A6',
  'Applied':            '#F97316',
  'General':            '#6366F1',
};

const SUBJECT_ICONS = {
  'Mathematics':        '📐',
  'Science':            '🔬',
  'Filipino':           '📖',
  'English':            '✏️',
  'Araling Panlipunan': '🌏',
  'ESP':                '🌱',
  'MAPEH':              '🎨',
  'Health':             '💊',
  'Applied':            '⚙️',
  'General':            '📚',
};

const TYPE_ICONS = { PDF:'📄', DOCX:'📝', DOC:'📝', PPT:'📊', PPTX:'📊' };

const GRADE_ORDER = ['Kinder','Grade 1','Grade 2','Grade 3','Grade 4','Grade 5',
                     'Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'];

let state = {
  search:  '',
  grade:   '',
  subject: '',
  topic:   '',
  sort:    'grade',
  type:    '',
  view:    'grid',
  bookmarks: new Set(JSON.parse(localStorage.getItem('eduhub_bookmarks') || '[]')),
};

function getFiltered() {
  let items = RESOURCES.slice();
  if (state.grade)   items = items.filter(r => r.grade === state.grade);
  if (state.subject) items = items.filter(r => r.subject === state.subject);
  if (state.type)    items = items.filter(r => r.type   === state.type);
  if (state.topic) {
    const t = state.topic.toLowerCase();
    items = items.filter(r =>
      r.title.toLowerCase().includes(t) ||
      r.desc.toLowerCase().includes(t)  ||
      r.file.toLowerCase().includes(t));
  }
  if (state.search) {
    const q = state.search.toLowerCase();
    items = items.filter(r =>
      r.title.toLowerCase().includes(q)   ||
      r.subject.toLowerCase().includes(q) ||
      r.grade.toLowerCase().includes(q)   ||
      r.desc.toLowerCase().includes(q));
  }
  switch (state.sort) {
    case 'grade':
      items.sort((a,b) => GRADE_ORDER.indexOf(a.grade) - GRADE_ORDER.indexOf(b.grade)
                        || a.title.localeCompare(b.title));
      break;
    case 'az':
      items.sort((a,b) => a.title.localeCompare(b.title));
      break;
    case 'za':
      items.sort((a,b) => b.title.localeCompare(a.title));
      break;
    case 'subject':
      items.sort((a,b) => a.subject.localeCompare(b.subject) || a.title.localeCompare(b.title));
      break;
  }
  return items;
}

function render() {
  const items  = getFiltered();
  const grid   = document.getElementById('cardsGrid');
  const empty  = document.getElementById('emptyState');
  const badge  = document.getElementById('countBadge');
  badge.textContent = `Showing ${items.length} resource${items.length !== 1 ? 's' : ''}`;
  grid.innerHTML = '';
  if (!items.length) {
    empty.style.display = 'flex';
    grid.style.display  = 'none';
    return;
  }
  empty.style.display = 'none';
  grid.style.display  = '';
  grid.className = state.view === 'list' ? 'resources-grid resources-grid--list' : 'resources-grid';
  items.forEach((r, i) => {
    const col   = SUBJECT_COLORS[r.subject] || '#6366F1';
    const icon  = SUBJECT_ICONS[r.subject]  || '📚';
    const tIcon = TYPE_ICONS[r.type]        || '📄';
    const bm    = state.bookmarks.has(r.file);
    const idx   = RESOURCES.indexOf(r);
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.style.animationDelay = `${Math.min(i, 8) * 0.04}s`;
    card.innerHTML = `
      <div class="card-thumb">
        <div class="card-thumb__bg" style="background:linear-gradient(135deg,${col}33,${col}88)"></div>
        <span class="card-thumb__icon">${icon}</span>
        <span class="card-thumb__type">${r.type} ${tIcon}</span>
        <button class="card-bookmark ${bm ? 'active' : ''}" data-idx="${idx}" title="Bookmark" aria-label="Bookmark">
          ${bm ? '★' : '☆'}
        </button>
      </div>
      <div class="resource-content">
        <h4>${r.grade}</h4>
        <h3>${r.title}</h3>
        <span class="resource-subject">
          <span class="resource-subject__dot" style="background:${col}"></span>
          ${r.subject}
        </span>
        <p>${r.desc}</p>
      </div>
      <div class="resource-buttons">
        <button class="btn-view" data-idx="${idx}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
          </svg>
          View
        </button>
        <a class="btn-dl" href="${r.file}" download title="Download">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
  grid.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', () => openModal(RESOURCES[+btn.dataset.idx]));
  });
  grid.querySelectorAll('.card-bookmark').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleBookmark(+btn.dataset.idx); });
  });
}

function toggleBookmark(idx) {
  const file = RESOURCES[idx].file;
  if (state.bookmarks.has(file)) state.bookmarks.delete(file);
  else state.bookmarks.add(file);
  localStorage.setItem('eduhub_bookmarks', JSON.stringify([...state.bookmarks]));
  render();
}

function bindFilters() {
  document.getElementById('selGrade').addEventListener('change', e => {
    state.grade = e.target.value; render();
  });
  document.getElementById('selSubject').addEventListener('change', e => {
    state.subject = e.target.value; render();
  });
  document.getElementById('selTopic').addEventListener('change', e => {
    state.topic = e.target.value; render();
  });
  document.getElementById('searchInput').addEventListener('input', e => {
    state.search = e.target.value.trim(); render();
  });
  document.getElementById('sortTabs').addEventListener('click', e => {
    const btn = e.target.closest('.sort-tab');
    if (!btn) return;
    document.querySelectorAll('.sort-tab').forEach(b => b.classList.remove('sort-tab--active'));
    btn.classList.add('sort-tab--active');
    state.sort = btn.dataset.sort;
    render();
  });
  document.getElementById('typePills').addEventListener('click', e => {
    const btn = e.target.closest('.type-pill');
    if (!btn) return;
    document.querySelectorAll('.type-pill').forEach(b => b.classList.remove('type-pill--on'));
    btn.classList.add('type-pill--on');
    state.type = btn.dataset.type;
    render();
  });
  document.getElementById('btnGrid').addEventListener('click', () => {
    state.view = 'grid';
    document.getElementById('btnGrid').classList.add('view-btn--on');
    document.getElementById('btnList').classList.remove('view-btn--on');
    render();
  });
  document.getElementById('btnList').addEventListener('click', () => {
    state.view = 'list';
    document.getElementById('btnList').classList.add('view-btn--on');
    document.getElementById('btnGrid').classList.remove('view-btn--on');
    render();
  });
}

function resetAll() {
  state.search = state.grade = state.subject = state.topic = state.type = '';
  state.sort   = 'grade';
  document.getElementById('selGrade').value    = '';
  document.getElementById('selSubject').value  = '';
  document.getElementById('selTopic').value    = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.sort-tab').forEach((b,i) => b.classList.toggle('sort-tab--active', i===0));
  document.querySelectorAll('.type-pill').forEach((b,i) => b.classList.toggle('type-pill--on', i===0));
  render();
}
window.resetAll = resetAll;

let pdfDoc  = null;
let pdfZoom = 1.0;
let spread  = 0;
const modalBg      = document.getElementById('modalBg');
const modal        = document.getElementById('modal');
const mGrade       = document.getElementById('mGrade');
const mTitle       = document.getElementById('mTitle');
const mSubject     = document.getElementById('mSubject');
const mDl          = document.getElementById('mDl');
const mPages       = document.getElementById('mPages');
const prevBtn      = document.getElementById('prevBtn');
const nextBtn      = document.getElementById('nextBtn');
const openBook     = document.getElementById('openBook');
const cvLeft       = document.getElementById('cvLeft');
const cvRight      = document.getElementById('cvRight');
const loaderL      = document.getElementById('loaderL');
const loaderR      = document.getElementById('loaderR');
const pnL          = document.getElementById('pnL');
const pnR          = document.getElementById('pnR');
const unavail      = document.getElementById('unavail');
const unavailIco   = document.getElementById('unavailIco');
const unavailTitle = document.getElementById('unavailTitle');
const unavailText  = document.getElementById('unavailText');
const zoomVal      = document.getElementById('zoomVal');

function openModal(r) {
  mGrade.textContent   = r.grade;
  mTitle.textContent   = r.title;
  mSubject.textContent = r.subject;
  mDl.href = r.file;
  pdfDoc = null; spread = 0; pdfZoom = 1.0;
  zoomVal.textContent = '100%';
  const ext = r.file.split('.').pop().toLowerCase().replace('pdf','pdf');
  modalBg.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if (ext === 'pdf') {
    unavail.style.display   = 'none';
    openBook.style.display  = 'flex';
    loaderL.style.display = loaderR.style.display = 'flex';
    cvLeft.style.display  = cvRight.style.display = 'none';
    pnL.textContent = pnR.textContent = '';
    mPages.textContent = '';
    prevBtn.disabled = true; nextBtn.disabled = false;
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    pdfjsLib.getDocument(r.file).promise.then(doc => {
      pdfDoc = doc;
      mPages.textContent = `Page 1–2 of ${doc.numPages}`;
      renderSpread(0);
    }).catch(() => {
      showUnavail('⚠️', 'Could not load PDF', 'The file may be missing or inaccessible from this browser.');
    });
  } else {
    openBook.style.display = 'none';
    let ico = '📝', msg = 'This file type cannot be previewed.';
    if (['doc','docx'].includes(ext)) { ico = '📝'; msg = 'Word documents cannot be previewed here. Please download the file.'; }
    if (['ppt','pptx'].includes(ext)) { ico = '📊'; msg = 'PowerPoint files cannot be previewed here. Please download the file.'; }
    showUnavail(ico, 'Preview unavailable', msg);
    mPages.textContent = '';
    prevBtn.disabled = nextBtn.disabled = true;
  }
}

function showUnavail(ico, title, text) {
  unavail.style.display = 'flex';
  openBook.style.display = 'none';
  unavailIco.textContent   = ico;
  unavailTitle.textContent = title;
  unavailText.textContent  = text;
}

async function renderSpread(leftIdx) {
  if (!pdfDoc) return;
  spread = leftIdx;
  const total = pdfDoc.numPages;
  prevBtn.disabled = spread <= 0;
  nextBtn.disabled = spread + 2 >= total;
  mPages.textContent = spread === 0 && total === 1
    ? `Page 1 of ${total}`
    : `Pages ${spread + 1}–${Math.min(spread + 2, total)} of ${total}`;
  await renderPage(spread + 1, cvLeft, loaderL, pnL, 'left');
  if (spread + 2 <= total) {
    await renderPage(spread + 2, cvRight, loaderR, pnR, 'right');
  } else {
    loaderR.style.display = 'none';
    cvRight.style.display = 'none';
    const ctx = cvRight.getContext('2d');
    ctx.clearRect(0, 0, cvRight.width, cvRight.height);
    pnR.textContent = '';
  }
}

async function renderPage(num, canvas, loader, pnEl, side) {
  loader.style.display = 'flex';
  canvas.style.display = 'none';
  try {
    const page = await pdfDoc.getPage(num);
    const vp   = page.getViewport({ scale: pdfZoom * devicePixelRatio });
    canvas.width  = vp.width;
    canvas.height = vp.height;
    canvas.style.width  = vp.width  / devicePixelRatio + 'px';
    canvas.style.height = vp.height / devicePixelRatio + 'px';
    await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
    pnEl.textContent = num;
  } catch(e) {
    pnEl.textContent = '';
  }
  loader.style.display = 'none';
  canvas.style.display = 'block';
}

function closeModal() {
  modalBg.style.display = 'none';
  document.body.style.overflow = '';
  pdfDoc = null;
}

function bindModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modalBg.addEventListener('click', e => { if (e.target === modalBg) closeModal(); });
  prevBtn.addEventListener('click', () => { if (spread > 0) renderSpread(spread - 2); });
  nextBtn.addEventListener('click', () => { if (pdfDoc && spread + 2 < pdfDoc.numPages) renderSpread(spread + 2); });
  document.getElementById('zoomIn').addEventListener('click', () => {
    pdfZoom = Math.min(pdfZoom + 0.25, 3);
    zoomVal.textContent = Math.round(pdfZoom * 100) + '%';
    if (pdfDoc) renderSpread(spread);
  });
  document.getElementById('zoomOut').addEventListener('click', () => {
    pdfZoom = Math.max(pdfZoom - 0.25, 0.5);
    zoomVal.textContent = Math.round(pdfZoom * 100) + '%';
    if (pdfDoc) renderSpread(spread);
  });
  document.addEventListener('keydown', e => {
    if (modalBg.style.display !== 'flex') return;
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowLeft')  prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bindFilters();
  bindModal();
  render();
});
