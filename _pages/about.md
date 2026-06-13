---
permalink: /
title: "Research Profile"
excerpt: "Research profile of Zhuo Sun"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
<style>
.lab-hero {
    margin: 0 0 1.6rem;
    padding: 1.35rem 1.45rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-left: 0.28rem solid #2563eb;
    border-radius: 0.45rem;
    box-shadow: 0 0.3rem 1.1rem rgba(15, 23, 42, 0.06);
}

.lab-hero h2 {
    margin: 0 0 0.5rem;
    color: #1e3a8a;
    font-size: 1.08rem;
    line-height: 1.25;
}

.lab-hero p {
    margin: 0.55rem 0;
    color: #334155;
    font-size: 0.92rem;
    line-height: 1.6;
}

.research-focus {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin: 1rem 0;
}

.focus-card {
    padding: 0.75rem 0.85rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.4rem;
}

.focus-card strong {
    display: block;
    margin-bottom: 0.2rem;
    color: #1e3a8a;
    font-size: 0.82rem;
}

.focus-card span {
    color: #475569;
    font-size: 0.78rem;
    line-height: 1.45;
}

.profile-notes {
    margin: 0.8rem 0 1rem;
    padding-left: 1.1rem;
    color: #334155;
    font-size: 0.86rem;
    line-height: 1.55;
}

.contact-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    margin-top: 1rem;
    padding-top: 0.9rem;
    border-top: 1px solid #e2e8f0;
}

.contact-strip span {
    color: #475569;
    font-size: 0.82rem;
}

.contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.1rem;
    padding: 0.35rem 0.8rem;
    color: #ffffff;
    background: #2563eb;
    border-radius: 0.35rem;
    font-size: 0.82rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
}

.contact-button:hover {
    color: #ffffff;
    background: #1d4ed8;
}

.publication-note {
    display: block;
    margin: -0.15rem 0 0.9rem;
    color: #64748b;
    font-size: 0.78rem;
}

.research-map {
    margin: 1.4rem 0 1.7rem;
}

.research-map h2 {
    margin-bottom: 0.55rem;
}

.research-map__figure {
    margin: 0;
    padding: 0.5rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.45rem;
    box-shadow: 0 0.16rem 0.7rem rgba(15, 23, 42, 0.05);
    overflow-x: auto;
}

.research-map__figure img {
    display: block;
    width: 100%;
    min-width: 760px;
    height: auto;
    border-radius: 0.3rem;
}

.paper-entry {
    display: grid;
    grid-template-columns: 6rem minmax(0, 1fr);
    align-items: stretch;
    gap: 0.85rem;
    margin: 0.9rem 0;
}

.conf-badge {
    min-height: 3.5rem;
    padding: 0.45rem 0.5rem;
    background: #eff6ff;
    color: #0f172a;
    border: 1px solid #bfdbfe;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.68rem;
    line-height: 1.15;
    text-align: center;
    box-shadow: 0 0.12rem 0.35rem rgba(15, 23, 42, 0.06);
}

.conf-name {
    color: #1e3a8a;
    font-weight: 800;
}

.conf-badge.venue-preprint {
    background: #fff1f2;
    border-color: #fecdd3;
}

.conf-badge.venue-preprint .conf-name {
    color: #9f1239;
}

.conf-badge.venue-workshop {
    background: #f0f9ff;
    border-color: #bae6fd;
}

.conf-badge.venue-workshop .conf-name {
    color: #0369a1;
}

.conf-badge.venue-journal {
    background: #f0fdf4;
    border-color: #bbf7d0;
}

.conf-badge.venue-journal .conf-name {
    color: #166534;
}

.conf-badge .year {
    font-size: 0.6rem;
    color: #64748b;
    margin-top: 0.05rem;
}

.paper-info {
    min-width: 0;
    padding: 0.65rem 0.85rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-left: 0.2rem solid #2563eb;
    border-radius: 0.4rem;
    box-shadow: 0 0.08rem 0.35rem rgba(15, 23, 42, 0.05);
    font-size: 0.8rem;
    line-height: 1.5;
}

.paper-info strong {
    font-weight: 600;
    font-size: 0.82rem;
    color: #1f2937;
}

.paper-authors {
    color: #475569;
}

.author-me {
    color: #0f172a;
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.08em;
    text-underline-offset: 0.18em;
}

.paper-link {
    color: #1d4ed8;
    text-decoration: none;
    border-bottom: 1px solid rgba(29, 78, 216, 0.25);
    transition: all 0.2s ease;
    font-style: italic;
    font-weight: 600;
}

.paper-link:hover {
    color: #0f172a;
    border-bottom-color: #0f172a;
    background-color: rgba(37, 99, 235, 0.08);
}

.paper-link::after {
    content: " ↗";
    font-size: 0.75em;
    margin-left: 2px;
    opacity: 0.6;
}

.paper-link[href=""] {
    color: #0f172a;
    border-bottom: 0;
    pointer-events: none;
}

.paper-link[href=""]::after {
    content: "";
}

.pdf-link {
    display: inline-flex;
    align-items: center;
    margin: 0.15rem 0.18rem 0 0;
    color: #64748b;
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(100, 116, 139, 0.32);
    border-radius: 0;
    font-size: 0.74rem;
    font-weight: 700;
    text-decoration: none;
}

.pdf-link::before {
    content: "[";
    margin-right: 0.05rem;
    color: #94a3b8;
}

.pdf-link::after {
    content: "]";
    margin-left: 0.05rem;
    color: #94a3b8;
}

.pdf-link:hover {
    color: #475569;
    border-bottom-color: rgba(71, 85, 105, 0.55);
}

.pdf-link[href=""] {
    color: #64748b;
    border-bottom-color: rgba(100, 116, 139, 0.28);
    pointer-events: none;
    cursor: default;
}

.award-link {
    display: inline-flex;
    align-items: center;
    margin: 0.15rem 0.18rem 0 0;
    color: #b91c1c;
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(185, 28, 28, 0.35);
    border-radius: 0;
    font-size: 0.74rem;
    font-weight: 800;
    text-decoration: none;
    pointer-events: none;
    cursor: default;
}

.award-link::before {
    content: "[";
    margin-right: 0.05rem;
    color: #ef4444;
}

.award-link::after {
    content: "]";
    margin-left: 0.05rem;
    color: #ef4444;
}

@media (max-width: 640px) {
    .lab-hero {
        padding: 1rem;
    }

    .research-focus {
        grid-template-columns: 1fr;
    }

    .contact-strip {
        align-items: flex-start;
        flex-direction: column;
    }

    .paper-entry {
        grid-template-columns: 1fr;
        gap: 0.45rem;
    }

    .conf-badge {
        align-items: flex-start;
        min-height: 0;
        width: fit-content;
        padding: 0.35rem 0.65rem;
    }

}
</style>

<section class="lab-hero">
    <h2>Efficient Machine Learning Lab @ SUFE</h2>
    <p>We develop novel and efficient learning algorithms for modern artificial intelligence and theoretical machine learning problems.</p>
    <div class="research-focus">
        <div class="focus-card">
            <strong>Artificial General Intelligence</strong>
            <span>LLMs, world models, diffusion models, reinforcement learning, and scalable learning systems.</span>
        </div>
        <div class="focus-card">
            <strong>Theoretical Machine Learning</strong>
            <span>Monte Carlo methods, variational inference, and probabilistic machine learning.</span>
        </div>
    </div>
    <p>Zhuo Sun is a <strong>tenure-track Assistant Professor</strong> in the School of Statistics and Data Science at Shanghai University of Finance and Economics.</p>
    <ul class="profile-notes">
        <li>Visiting Researcher at Imperial College London</li>
        <li>Area Chair/Program Committee: ICML/ICLR/NeurIPS/AISTATS/UAI</li>
        <li>Ph.D. in Machine Learning and Computational Statistics from University College London, supervised by Prof. François-Xavier Briol and Prof. Jinghao-Xue; master's degree in statistical science from the University of Oxford, supervised by Prof. George Deligiannidis.</li>
    </ul>
    <div class="contact-strip">
        <span>Interested in these research directions? Please feel free to get in touch.</span>
        <a class="contact-button" href="mailto:zhuosunreid@outlook.com">zhuosunreid@outlook.com</a>
    </div>
</section>



<section class="research-map">
    <h2>Research Topics and Goals</h2>
    <figure class="research-map__figure">
        <img src="/images/research-topics-goals.svg" alt="Research topics and goals diagram">
    </figure>
</section>




## Preprints & Working Papers
<small class="publication-note"><sup>*</sup> equal contribution; <sup>†</sup> corresponding author</small>

<div class="paper-entry">
    <div class="conf-badge venue-preprint">
        <div class="conf-name">arxiv</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Cheng, X.<sup>*</sup>; Yuan, W.<sup>*</sup>; Mu, Z.; Zhang, Y.; Yang, Y.; Wang, H.; <strong class="author-me">Sun, Z.<sup>†</sup></strong>; Liu, C.<sup>†</sup></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Scaling World-Model Reinforcement Learning Through Diffusion Policy Optimization</a></em>
        arxiv.
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="pdf-link" href="https://arxiv.org/pdf/2605.26282" target="_blank">arXiv</a>
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>

<div class="paper-entry">
    <div class="conf-badge venue-preprint">
        <div class="conf-name">arxiv</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Zhao, Y.<sup>*</sup>; Cheng, X.<sup>*</sup>; Liu, H.<sup>*</sup>; He, B.; Zhang, Xin.; Zhu, H.; Chen, W.; Zeng, L.; <strong class="author-me">Sun, Z.<sup>†</sup></strong></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Saliency-Aware Regularized Quantization Calibration for Large Language Models</a></em>
        arxiv.
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="pdf-link" href="https://arxiv.org/pdf/2605.05693" target="_blank">arXiv</a>
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>



<div class="paper-entry">
    <div class="conf-badge venue-preprint">
        <div class="conf-name">arxiv</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Cheng, X<sup>*</sup>; Wang, H.<sup>*</sup>; Yuan, W.; Wang, Z.; Chen, Z.; Zeng, L.; <strong class="author-me">Sun, Z.<sup>†</sup></strong></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Fisher Decorator: Refining Flow Policy via A Local Transport Map</a></em>
        arxiv.
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="pdf-link" href="https://arxiv.org/pdf/2604.17919" target="_blank">arXiv</a>
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>


<div class="paper-entry">
    <div class="conf-badge venue-preprint">
        <div class="conf-name">arxiv</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Yang, Y.; Cheng, X.; He, Y.; Li, K.; Yuan W.; <strong class="author-me">Sun, Z.<sup>†</sup></strong></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Outlier-Robust Diffusion Posterior Sampling for Bayesian Inverse Problems</a></em>
        arxiv.
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="pdf-link" href="https://arxiv.org/pdf/2602.02045" target="_blank">arXiv</a>
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>


<div class="paper-entry">
    <div class="conf-badge venue-preprint">
        <div class="conf-name">arxiv</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Kiyohara, N.<sup>*</sup>; Zhu, BH.<sup>*</sup>; Hassanin, R.<sup>*</sup>; <strong class="author-me">Sun, Z.<sup>†</sup></strong>; Chen, WL.<sup>†</sup>; Bhatt, S.; Li, YZ.<sup>†</sup></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Interdomain Attention: Beyond Token-Level Key-Value Memory</a></em>
        arxiv.
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="pdf-link" href="https://arxiv.org/pdf/2605.24330" target="_blank">arXiv</a>
            <a class="award-link" href="" target="_blank">ICML 2026 Workshop on Foundations of Deep Generative Models, Spotlight Paper</a>
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>


<div class="paper-entry">
    <div class="conf-badge venue-workshop">
        <div class="conf-name">ICML'W</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Guo, S.; Cheng, X.; Liu, X.; Niu, Z.; Chen, Z.; Liu, X.; <strong class="author-me">Sun, Z.<sup>†</sup></strong></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Random-Projection Tree Stein Variational Gradient Descent</a></em>
        In ICML 2026 Workshop on Structured Probabilistic Inference & Generative Modeling.
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="pdf-link" href="" target="_blank">arXiv</a>
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>








## Publications 📖
<small class="publication-note"><sup>*</sup> equal contribution; <sup>†</sup> corresponding author</small>


<div class="paper-entry">
    <div class="conf-badge">
        <div class="conf-name">ICML</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Cheng, X.<sup>*</sup>; Yuan, W.<sup>*</sup>; Li, B.; Xu, Y.; Yang, Y.; Liang, H.; Peng, B.; Loftin, R.; <strong class="author-me">Sun, Z.</strong>; Hu, Y.</span> (2026).
        <em><a class="paper-link" href="" target="_blank">How Does the Lagrangian Guide Safe Reinforcement Learning through Diffusion Models?</a></em>
        In Proceedings of the 43rd International Conference on Machine Learning (ICML 2026).
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="pdf-link" href="https://www.arxiv.org/pdf/2602.02924" target="_blank">arXiv</a>
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>

<div class="paper-entry">
    <div class="conf-badge">
        <div class="conf-name">ICLR</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Li, K.; Yang, Y.; Chen, X.; He, Y.; <strong class="author-me">Sun, Z.<sup>†</sup></strong></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Multilevel Control Functional.</a></em>
        In International Conference on Learning Representations (ICLR 2026).
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <!-- <a class="pdf-link" href="https://arxiv.org/abs/2305.12996" target="_blank">arXiv</a> -->
            <a class="award-link" href="" target="_blank">With Score 8,8,8 (Rank 2nd over 19000 submissions)</a>
        </span>
    </div>
</div>



<div class="paper-entry">
    <div class="conf-badge">
        <div class="conf-name">ICLR</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Cheng, X.; Yuan, W.; Yang, Y.; Zhang, Y.; Cheng, S.; He, Y.; <strong class="author-me">Sun, Z.<sup>†</sup></strong></span> (2026).
        <em><a class="paper-link" href="" target="_blank">Information Shapes Koopman Representation.</a></em>
        In International Conference on Learning Representations (ICLR 2026).
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <!-- <a class="pdf-link" href="https://arxiv.org/abs/2510.13025" target="_blank">arXiv</a> -->
            <a class="award-link" href="" target="_blank">Selected for Oral Presentation (top 1.18%)</a>
        </span>
    </div>
</div>




<div class="paper-entry">
    <div class="conf-badge">
        <div class="conf-name">ICLR</div>
        <div class="year">2026</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Cheng, X.; Yang, Y.; Jiang, W.; Yuan, C.; <strong class="author-me">Sun, Z.</strong>; Hu, Y.</span> (2026).
        <em><a class="paper-link" href="" target="_blank">From Embedding to Control: Representations for Stochastic Multi-Object Systems.</a></em>
        In International Conference on Learning Representations (ICLR 2026).
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <!-- <a class="pdf-link" href="https://arxiv.org/abs/2510.26344" target="_blank">arXiv</a> -->
            <!-- [<a href="https://github.com/username/project" target="_blank">Code</a> -->
        </span>
    </div>
</div>




<div class="paper-entry">
    <div class="conf-badge">
        <div class="conf-name">UAI</div>
        <div class="year">2023</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors"><strong class="author-me">Sun, Z.</strong>; Oates, C. J; Briol, F-X.</span> (2023).
        <em><a class="paper-link" href="https://proceedings.mlr.press/v216/sun23a.html" target="_blank">Meta-learning Control Variates: Variance Reduction with Limited Data.</a></em>
        In Proceedings of the 39th Conference on Uncertainty in Artificial Intelligence (UAI 2023).
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <!-- <a class="pdf-link" href="https://arxiv.org/abs/2303.04756" target="_blank">arXiv</a> -->
            <a class="award-link" href="" target="_blank">Selected for Oral Presentation (top 3%)</a>
        </span>
    </div>
</div>



<div class="paper-entry">
    <div class="conf-badge venue-workshop">
        <div class="conf-name">ICML SPIGM</div>
        <div class="year">2023</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Li, K.<sup>*</sup>; <strong class="author-me">Sun, Z.<sup>*</sup><sup>†</sup></strong></span> (2023).
        <em><a class="paper-link" href="https://openreview.net/pdf?id=8buHq9xP6F" target="_blank">Multilevel Control Functional (Short Version).</a></em>
        In ICML 2023 SPIGM.
    </div>
</div>



<div class="paper-entry">
    <div class="conf-badge">
        <div class="conf-name">ICML</div>
        <div class="year">2023</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors"><strong class="author-me">Sun, Z.</strong>; Barp, A.; Briol, F.-X.</span> (2023).
        <em><a class="paper-link" href="https://proceedings.mlr.press/v202/sun23a.html" target="_blank">Vector-valued Control Variates.</a></em>
        In Proceedings of the 40th International Conference on Machine Learning (ICML 2023).
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
            <a class="award-link" href="" target="_blank">ASA SBSS Best Student Paper (2022)</a>
            <!-- [<a href="" target="_blank">Code</a> -->
        </span>
    </div>
</div>




<div class="paper-entry">
    <div class="conf-badge">
        <div class="conf-name">AISTATS</div>
        <div class="year">2021</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors"><strong class="author-me">Sun, Z.</strong>; Wu, J.; Li, X.; Yang, W.; Xue, J-H.</span> (2021).
        <em><a class="paper-link" href="https://proceedings.mlr.press/v130/sun21a.html" target="_blank">Amortized Bayesian Prototype Meta-learning: A new probabilistic meta-learning approach to few-shot image classification.</a></em>
        In Proceedings of the 24th International Conference on Artificial Intelligence and Statistics(AISTATS 2023).
        <span style="margin-left: 8px; font-size: 0.75rem; color: #666;">
        </span>
    </div>
</div>



<div class="paper-entry">
    <div class="conf-badge venue-journal">
        <div class="conf-name">Neurocomputing</div>
        <div class="year">2021</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Li, X.<sup>*</sup>; <strong class="author-me">Sun, Z.<sup>*</sup></strong>; Xue, J-H. ; Ma, Z.</span> (2021).
        <em><a class="paper-link" href="" target="_blank">A Concise Review of Recent Few-shot Meta-learning Methods.</a></em>
        Neurocomputing.
    </div>
</div>



<div class="paper-entry">
    <div class="conf-badge venue-journal">
        <div class="conf-name">IEEE TIP</div>
        <div class="year">2020</div>
    </div>
    <div class="paper-info">
        <span class="paper-authors">Li, X.<sup>*</sup>; Wu, J.<sup>*</sup>; <strong class="author-me">Sun, Z.<sup>*</sup></strong>; Ma, Z. ; Cao, J.; Xue, J-H.</span> (2020).
        <em><a class="paper-link" href="" target="_blank">Bi-Similarity Network for Fine-grained Few-shot Image Classification.</a></em>
        IEEE Transactions on Image Processing.
    </div>
</div>

















<a href="https://clustrmaps.com/site/1bg2c" title="Visit tracker"><img src="//clustrmaps.com/map_v2.png?cl=080808&w=a&t=n&d=C4byDrEvOWlkQBPck4uhnEYVbsB_VEy0fAJC1qmic1s&co=ffffff&ct=808080" /></a>
