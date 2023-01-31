import React from 'react'
import { SearchIcon } from '../../assets/icon'

const Search = () => {

    return (
        <form>
            <section class="s-group-input-search is-flex">
                <div className="input-group-btn">
                    <button><SearchIcon width="15" height="15" /> </button>
                </div>
                <input placeholder="Tên sản phẩm, nhu cầu, hãng" autocomplete="off" type="text" class="input-search__input" />
            </section>
        </form>
    )
}

export default Search